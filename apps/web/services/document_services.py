from pathlib import Path
import os

def add_documents():
    
    print("Gel")
    all_files = []
    source_path =  Path(input(f"Enter the path of the folder: "))
    while True:
        if source_path.exists() and source_path.is_dir():
            break
        print("Please enter a valid input path")
    for root,dirs, files in os.walk(source_path):
        for file in files:
            all_files.append(os.path.join(root,file))           
            
    print(*all_files,sep="\n")
    input("Enter to close")
    chunk_documents(all_files)
    
def chunk_documents(all_files: list):
    from langchain_text_splitters import (
        MarkdownHeaderTextSplitter,
        RecursiveCharacterTextSplitter,
    )
    from config import Settings
    markdown_text = ""
    final_chunks = []
    
    for file in all_files:
        with open(file, "r", encoding="utf-8") as f:
            markdown_text = f.read()
            HEADERS_TO_SPLIT_ON = [
                ("#", "h1"),
                ("##", "h2"),
                ("###", "h3"),
                ]

        markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)
        md_header_splits = markdown_splitter.split_text(markdown_text)
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size = Settings.CHUNK_SIZE,
            chunk_overlap = Settings.CHUNK_OVERLAP
        )
    final_chunks.append(text_splitter.split_documents(md_header_splits))
    print(final_chunks)
    