import os
from pathlib import Path

from click import echo
from dotenv import load_dotenv
from fastapi import FastAPI
from api.routes import router
from config import settings
import questionary
from services.document_services import add_documents


PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(PROJECT_ROOT / ".env")
app = FastAPI()

from api.routes import router
app.include_router(router)


# Map choices to functions
actions = {
    "Add document": add_documents,
    # "Search documents": search_documents,
    # "Exit": exit_app
}

def main():
    print("""Welcome to Papyr! Your personal document management system. Manage, index, and search your documents effortlessly.\nGet started by adding your documents and exploring the powerful indexing and search capabilities.""")
    # required_vars = [""]
    # config = {key: os.getenv(key) for key in }
    

    choice = questionary.select(
        "What would you like to do?",
          choices=list(actions.keys())
    ).ask()

    if choice:
        actions[choice]()

if __name__ == "__main__":
    main()
 