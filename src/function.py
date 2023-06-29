from typing import List, Optional

from . import settings
from .book import Book
from .utils import scraper


def browsing(
    page: Optional[int] = 0,
    limit: Optional[int] = 100,
    languages: Optional[List[str]] = ["en", "de"],
    publishedAt_start: Optional[int] = 0,
    publishedAt_end: Optional[int] = None,
) -> List[Book]:
    """
    Search for books using the Algolia API.
    """
    filter_languages = " OR ".join(f"language:{language}" for language in languages) if languages else None
    filter_publishedAt = f"publishedAt >= {publishedAt_start}"
    if publishedAt_end is not None:
        filter_publishedAt += f" AND publishedAt < {publishedAt_end}"
    filters = filter_publishedAt
    if filter_languages is not None:
        filters += f" AND ({filter_languages})"

    data = {
        "page": page,
        "hitsPerPage": limit,
        "filters": filters,
    }

    r = scraper.post(
        settings.SCRAPER_URL,
        headers=settings.HEADERS_ALGOLIA,
        json=data,
    )
    r.raise_for_status()
    r_json = r.json()
    hits = r_json["hits"]
    total_page = r_json["nbPages"]
    current_page = r_json["page"]
    return hits, total_page, current_page
