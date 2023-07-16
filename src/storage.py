import os

import boto3
from . import settings


def upload_to_s3(filepath, filename, upload_to=""):
    s3_file_key = os.path.join(upload_to, filename)
    s3_client = boto3.client(
        "s3",
        endpoint_url=settings.BACKBLAZE_S3_URL,
        aws_access_key_id=settings.BACKBLAZE_KEY_ID,
        aws_secret_access_key=settings.BACKBLAZE_KEY_PRIVATE,
    )
    try:
        s3_client.upload_file(
            Filename=filepath,
            Bucket=settings.BACKBLAZE_BUCKET,
            Key=s3_file_key,)
    except:
        pass


def download_from_s3(filename: str, upload_to: str):
    s3_file_key = os.path.join(upload_to, filename)
    download_url = "https://" + \
        os.path.join(settings.BACKBLAZE_DOMAIN, s3_file_key)
    return download_url
