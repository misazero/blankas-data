import json
import os
from pathlib import Path

from tqdm import tqdm

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
    data = json.load(open("bookdata/algolia_books_by_lang.json", encoding="utf8"))["en"]
    count_index = 0
    for key in tqdm(data):
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


if __name__ == "__main__":
    # save_all_books()
    # scrap_all_books()
    scrap_en_books(download_audio=True, limit=None)
