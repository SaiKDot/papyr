from fastapi import APIRouter

# Create FastAPI app instance
router = APIRouter()


@router.get("/")
def read_root():
    return {"message" : "hello World"}

__all__ = ["router"]