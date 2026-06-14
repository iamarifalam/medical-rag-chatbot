
# **AI Medical RAG Chatbot**

A modern AI-powered Medical RAG Chatbot built using FastAPI, React, Vite, and Groq LLM inference.

This project provides a real-time conversational AI experience inspired by Gemini and Claude-style interfaces with animated UI, persistent chats, responsive layout, and blazing-fast AI responses.

---

# **Features**

→ Modern Gemini-style AI chat interface

→ Real-time AI responses using Groq

→ FastAPI backend architecture

→ React + Vite frontend

→ Responsive sidebar with chat history

→ New chat support

→ Animated UI interactions

→ Markdown-ready responses

→ File upload ready architecture

→ Production-ready scalable structure

→ Low latency inference using Llama 3.1

→ Clean component-based frontend

---

# **Tech Stack**

## **Frontend**

→ React

→ Vite

→ CSS3

→ Framer Motion

→ Lucide React

→ Axios

## **Backend**

→ FastAPI

→ Groq API

→ Python

→ Uvicorn

## **AI Model**

→ llama-3.1-8b-instant

---

# **Project Architecture**

```text
Frontend (React + Vite)
        ↓
Axios API Calls
        ↓
FastAPI Backend
        ↓
Groq Inference API
        ↓
Llama 3.1 AI Model
```

---

# **UI Inspiration**

The UI design is inspired by:

→ Google Gemini

→ Claude AI

→ ChatGPT

The goal was to create a premium conversational experience with smooth animations, immersive gradients, responsive interactions, and modern AI chat aesthetics.

---

# **Folder Structure**

```text
medical-rag-chatbot/
│
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── screenshots/
└── README.md
```

---

# **Installation**

## **Clone Repository**

```bash
git clone https://github.com/YOUR_USERNAME/medical-rag-chatbot.git
```

---

# **Backend Setup**

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# **Frontend Setup**

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# **API Endpoint**

## **POST /chat**

### **Request**

```json
{
  "message": "What is diabetes?"
}
```

### **Response**

```json
{
  "response": "Diabetes is a chronic medical condition..."
}
```

---

# **Future Enhancements**

→ PDF upload support

→ Medical document retrieval

→ Vector database integration

→ LangChain integration

→ RAG pipeline with embeddings

→ Authentication system

→ Chat persistence database

→ Voice input support

→ Streaming responses

→ Dark/light themes

→ AI typing animations

→ Multi-model support

---

# **Why Groq?**

Groq provides ultra-fast inference speeds with very low latency, making it ideal for real-time AI chat applications. The application uses the `llama-3.1-8b-instant` model for fast conversational responses. ([console.groq.com](https://console.groq.com/docs/model/llama-3.1-8b-instant?utm_source=chatgpt.com))

---

# **Current Status**

Frontend:

→ Working

Backend:

→ Working

AI Integration:

→ Working

Chat System:

→ Working

Responsive UI:

→ Working

---

# **Author**

Arif Alam

AI Engineer | Content Creator | MLOps | GenAI

---

# **License**

MIT License
