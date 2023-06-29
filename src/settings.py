import os

from dotenv import load_dotenv

load_dotenv(".env")

ALGOLIA_API_KEY = os.getenv("ALGOLIA_API_KEY")
ALGOLIA_APPLICATION_ID = os.getenv("ALGOLIA_APPLICATION_ID")

BASE_URL = os.getenv("BASE_URL")
WEB_API_URL = os.getenv("WEB_API_URL")
APP_API_URL = os.getenv("APP_API_URL")
SCRAPER_URL = os.getenv("SCRAPER_URL")

HEADERS = {
    "x-requested-with": "XMLHttpRequest",
}

HEADERS_ALGOLIA = {
    "x-algolia-api-key": ALGOLIA_API_KEY,
    "x-algolia-application-id": ALGOLIA_APPLICATION_ID,
}

CLOUDFLARE_MAX_ATTEMPTS = os.getenv("CLOUDFLARE_MAX_ATTEMPTS", 10)
CLOUDFLARE_WAIT_TIME = os.getenv("CLOUDFLARE_WAIT_TIME", 2)

LANGUAGES = ["en", "de"]

FILENAME_COVER = "cover"
FILENAME_TEXT = "book"
FILENAME_RAW = "book"
