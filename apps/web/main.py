import os
from pathlib import Path
from dotenv import load_dotenv
from fastapi import FastAPI
from api.routes import router
from config import settings



PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(PROJECT_ROOT / ".env")
app = FastAPI()

from api.routes import router
app.include_router(router)

def main():
    print("""Welcome to Papyr! Your personal document management system. Manage, index, and search your documents effortlessly.\nGet started by adding your documents and exploring the powerful indexing and search capabilities.""")
    # required_vars = [""]
    # config = {key: os.getenv(key) for key in }
        


if __name__ == "__main__":
    main()
