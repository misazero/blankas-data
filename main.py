import json

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


if __name__ == "__main__":
    save_all_books()
