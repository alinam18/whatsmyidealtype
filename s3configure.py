import boto3
import uuid
from libsql_client import create_client
import os

# ----------------------------
# 1. CONFIGURATION
# ----------------------------
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
S3_BUCKET_NAME = "whatsmyidealtype"
S3_REGION = "ap-southeast-2"  # e.g., Sydney

TURSO_DB_URL = "libsql://your-db-name.turso.io"
TURSO_AUTH_TOKEN = "your-auth-token"

# ----------------------------
# 2. INITIALIZE CLIENTS
# ----------------------------
s3 = boto3.client(
    "s3",
    region_name=S3_REGION,
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
)

db = create_client(url=TURSO_DB_URL, auth_token=TURSO_AUTH_TOKEN)
