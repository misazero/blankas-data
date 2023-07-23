import os
import urllib.parse

from .utils import scraper

from . import settings


class SingletonMeta(type):
    """
    The Singleton class can be implemented in different ways in Python. Some
    possible methods include: base class, decorator, metaclass. We will use the
    metaclass because it is best suited for this purpose.
    """

    _instances = {}

    def __call__(cls, *args, **kwargs):
        """
        Possible changes to the value of the `__init__` argument do not affect
        the returned instance.
        """
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]


class BackblazeNaiveAPI(metaclass=SingletonMeta):
    HOST = None
    AUTH_TOKEN = None

    def b2_authorize(self, raise_exception=True):
        url = os.path.join(settings.BACKBLAZE_API_HOST,
                           "b2api/v2/b2_authorize_account")
        response = scraper.get(url, auth=(
            settings.BACKBLAZE_KEY_ID, settings.BACKBLAZE_KEY_PRIVATE))
        if response.status_code == 200:
            response_obj = response.json()
            self.HOST = response_obj.get("apiUrl")
            self.AUTH_TOKEN = response_obj.get("authorizationToken")
        if self.HOST is None or self.AUTH_TOKEN is None:
            if raise_exception:
                raise Exception("Can not authorize B2")

    def list_file_names(self, raise_exception=True, recursive=True, verbose=False, *args, **kwargs):
        files = []
        if self.HOST is None or self.AUTH_TOKEN is None:
            self.b2_authorize(raise_exception=raise_exception)
        if self.HOST is not None and self.AUTH_TOKEN is not None:
            url = os.path.join(self.HOST, "b2api/v2/b2_list_file_names")
            kwargs["bucketId"] = settings.BACKBLAZE_BUCKET_ID
            url_params = urllib.parse.urlencode(
                kwargs, quote_via=urllib.parse.quote)
            headers = {"Authorization": self.AUTH_TOKEN}
            response = scraper.get(f"{url}?{url_params}", headers=headers)
            if response.status_code == 401:
                self.b2_authorize(raise_exception=raise_exception)
                response = scraper.get(f"{url}?{url_params}", headers=headers)
            if response.status_code == 401 and raise_exception:
                raise Exception("Can not authorize B2")
            if response.status_code == 200:
                response_obj = response.json()
                files = response_obj.get("files", [])
                if verbose:
                    print(f"Size Query Results: {len(files)}")
                startFileName = response_obj.get("nextFileName")
                if recursive and startFileName is not None:
                    kwargs["startFileName"] = startFileName
                    recursive_files = self.list_file_names(
                        recursive=recursive, **kwargs)
                    files += recursive_files
        return files

    def get_book_ids(self, prefix=None, raise_exception=False):
        kwargs = {"delimiter": "/", "maxFileCount": 1000}
        if prefix is not None:
            kwargs["prefix"] = prefix
        files = self.list_file_names(
            raise_exception=raise_exception, recursive=True, verbose=True, **kwargs)
        book_ids = {}
        for file in files:
            if file["action"] == "folder":
                path = file["fileName"]
                book_id = path.split(os.sep)[-2]
                book_ids[book_id] = path
        return book_ids

    def get_book_files(self, prefix, raise_exception=False):
        kwargs = {"prefix": prefix, "maxFileCount": 100}
        files = self.list_file_names(
            raise_exception=raise_exception, recursive=False, **kwargs)
        book = None
        chapters = {}
        for file in files:
            if file["action"] == "upload":
                fileName = file["fileName"]
                file_name = os.path.split(fileName)[-1]
                if file_name == "book.json":
                    book = fileName
                else:
                    chapters[file_name] = fileName
        return book, chapters
