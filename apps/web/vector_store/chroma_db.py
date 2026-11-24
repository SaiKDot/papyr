import chromadb
from pathlib import Path

DB_PATH = Path(__file__).parent.chroma_data

class ChromaDB:
    def __init__(self, collection_name="astro"):
        
        self.client = chromadb.PersistentClient(
            path = str(DB_PATH)
        )
        
        self.collection = self.client.get_or_create_collection(
            name="astronova"
        )
    def add_documents(self,documents, ids, metadatas=None):
         self.collection.add(
             documents=documents,
             ids=ids,
             metadatas=metadatas
         )
    def search_collection(self,query,n_results=3):
        results = self.collection.query(
            query_texts=[query],
            n_results=n_results
        )
    def get_all(self):
        return self.collection.get()

    def count(self):
        return self.collection.count()