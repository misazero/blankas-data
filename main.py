import json
import os
from pathlib import Path
import requests

from tqdm import tqdm

from src import settings
from src.backblaze import BackblazeNaiveAPI
from src.book import Book
from src.function import browsing
from src.storage import upload_to_s3, download_from_s3


def save_all_books():
    books = []
    count = 0
    strategy_date = [
        1683755000,
        1629755000,
        1596855000,
        1551855000,
        1492855000,
        1436227200,
        0
    ]
    for strategy_index, timestamp in enumerate(strategy_date):
        for page in range(10):
            end = None
            if strategy_index > 0:
                end = strategy_date[strategy_index - 1]
            start = timestamp
            hits, total_page, current_page = browsing(page=page, publishedAt_start=start, publishedAt_end=end)
            books += hits
            count += len(hits)
            print(f"strategy: {strategy_index + 1} / {len(strategy_date)}, page: {page + 1} / {total_page}, hit: {count}")
            if total_page == (current_page + 1):
                break

    json.dump(books, open("bookdata/algolia_books.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)


def scrap_all_books():
    error_data = []
    cloudflare_error_data = []
    books_data = {}
    data = json.load(open("bookdata/algolia_books.json", encoding="utf8"))
    start_index = 0
    count_index = 0
    for algolia_book in tqdm(data):
        count_index += 1
        if count_index < start_index:
            continue
        slug = algolia_book["slug"]
        try:
            book = Book.from_slug(slug)
        except:
            error_data.append(algolia_book)
            continue
        try:
            book_serialize = book.serialize()
        except:
            cloudflare_error_data.append(algolia_book)
            continue
        book_data = algolia_book.copy()
        book_data["meta"] = book_serialize
        book_id = book.id
        books_data[book_id] = book_data
        language = book_data["language"]
        book_dir = Path(f"bookdata/{language}/{book_id}")
        book_dir.mkdir(parents=True, exist_ok=True)
        for chapter in book.chapters:
            chapter.download_audio(target_dir=book_dir)

    json.dump(books_data, open("bookdata/books.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
    json.dump(error_data, open("bookdata/error_algolia_books.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
    json.dump(cloudflare_error_data, open("bookdata/cloudflare_error_algolia_books.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)


def scrap_en_books(download_audio=False, limit=None):
    error_data = []
    cloudflare_error_data = []
    # books_data = {}
    backblaze_book_ids = json.load(open("bookdata/backblaze_book_ids.json", encoding="utf8"))
    data = json.load(open("bookdata/algolia_books_by_lang.json", encoding="utf8"))["en"]
    count_index = 0
    for key in tqdm(data):
        if key in backblaze_book_ids:
            continue
        count_index += 1
        if limit is not None and count_index > limit:
            break
        algolia_book = data[key]
        try:
            book = Book.from_slug(key)
        except:
            error_data.append(algolia_book)
            continue
        try:
            book_serialize = book.serialize()
        except:
            cloudflare_error_data.append(algolia_book)
            continue
        book_data = algolia_book.copy()
        book_data["meta"] = book_serialize
        book_id = book.id
        language = book_data["language"]
        # books_data[book_id] = book_data
        book_dir = Path(f"bookdata/{language}/{book_id}")
        upload_to = f"bookdata/{language}/{book_id}"
        book_dir.mkdir(parents=True, exist_ok=True)
        if download_audio:
            chapters_data = []
            for chapter in book.chapters:
                chapter.download_audio(target_dir=book_dir)
                filename = f"chapter_{chapter.order_no}.m4a"
                filepath = upload_to + "/" + filename
                upload_to_s3(filepath, filename, upload_to)
                s3_url = download_from_s3(filename, upload_to)
                chapter.data["s3_url"] = s3_url
                chapters_data.append(chapter.data)
                if os.path.exists(filepath):
                    os.remove(filepath)
            book_data["meta"]["chapters"] = chapters_data

        json.dump(book_data, open(f"{upload_to}/book.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
        filename = "book.json"
        filepath = f"{upload_to}/book.json"
        upload_to_s3(filepath, filename, upload_to)
    json.dump(error_data, open("bookdata/error_en_algolia_books.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
    json.dump(cloudflare_error_data, open("bookdata/cloudflare_error_en_algolia_books.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)


def get_backblaze_data():
    backblaze_api = BackblazeNaiveAPI()
    book_ids = backblaze_api.get_book_ids(prefix="bookdata/en/", raise_exception=True)
    print(f"Number book uploaded: {len(book_ids)}")
    json.dump(book_ids, open("bookdata/backblaze_book_ids.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)


def verify_backblaze_book_files():
    backblaze_api = BackblazeNaiveAPI()
    backblaze_book_ids = json.load(open("bookdata/backblaze_book_ids.json", encoding="utf8"))
    miss_book = {}
    miss_chapter = {}
    completed = {}
    for book_id, book_path in tqdm(backblaze_book_ids.items()):
        book, chapters = backblaze_api.get_book_files(prefix=book_path, raise_exception=True)
        if book is None:
            miss_book[book_id] = book_path
        else:
            book_url = os.path.join("https://", settings.BACKBLAZE_DOMAIN, book_path, "book.json")
            response = requests.get(book_url)
            book_json = response.json()
            chapters_length = book_json["meta"]["chaptersLength"]
            miss_chapters = []
            for chapter_index in range(chapters_length + 2):
                chaper_audio_name = f"chapter_{chapter_index}.m4a"
                if chaper_audio_name not in chapters:
                    miss_chapters.append(chaper_audio_name)
            if miss_chapters != []:
                miss_chapter[book_id] = {
                    "book_path": book_path,
                    "miss_chapters": miss_chapters
                }
            else:
                completed[book_id] = book_json
    print(f"Miss Book: {len(miss_book)}, Miss chapters: {len(miss_chapters)}, Completed: {len(completed)}")
    json.dump(miss_book, open("bookdata/backblaze_miss_book_book_ids.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
    json.dump(miss_chapters, open("bookdata/backblaze_miss_chapters_book_ids.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
    json.dump(completed, open("bookdata/backblaze_completed_book_ids.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)


if __name__ == "__main__":
    # save_all_books()
    # scrap_all_books()
    # scrap_en_books(download_audio=True, limit=None)
    # get_backblaze_data()
    verify_backblaze_book_files()
