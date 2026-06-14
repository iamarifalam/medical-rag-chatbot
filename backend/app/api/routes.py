import os
import shutil

from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel

from app.services.rag_service import process_pdf, ask_question

router = APIRouter()

UPLOAD_DIR = "uploaded_docs"

os.makedirs(UPLOAD_DIR, exist_ok=True)

class ChatRequest(BaseModel):
    question: str

@router.get("/")
def home():
    return {"message": "Medical RAG Chatbot Running"}

@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    chunks = process_pdf(file_path)

    return {
        "message": "PDF processed successfully",
        "chunks": chunks
    }

@router.post("/chat")
async def chat(request: ChatRequest):

    answer = ask_question(request.question)

    return {
        "answer": answer
    }