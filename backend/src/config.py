import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
mongodb_uri: str = os.getenv("MONGODB_URI")
