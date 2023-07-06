import json
from pathlib import Path

from tqdm import tqdm

from src.book import Book
from src.function import browsing


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


if __name__ == "__main__":
    # save_all_books()
    scrap_all_books()
