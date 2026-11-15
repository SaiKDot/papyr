from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
     OPEN_API_KEY: str=""
     LLM_MODEL: str = "gpt-5.6-luna"
     EMBEDDING_MODEL: str = "text-embedding-3-small"
     
     VECTOR_DB_PATH: str = "./papyrstore"
     
     CHUNK_SIZE: int = 500
     OVERLAP: int = 100
     
     model_config = SettingsConfigDict(
         env_file=".env",
         env_file_encoding="utf-8",
         case_sensitive=False,
         extra="ignore"
     )
     
settings=Settings()