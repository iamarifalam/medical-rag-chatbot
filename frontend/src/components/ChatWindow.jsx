import { useRef, useState } from "react";

import {
  Paperclip,
  Send,
  Sparkles,
} from "lucide-react";

import "./ChatWindow.css";

export default function ChatWindow({
  activeChat,
  messages,
  onSend,
}) {

  const [input, setInput] = useState("");

  const fileInputRef = useRef(null);

  const submit = () => {

    if (!input.trim()) return;

    onSend(input);

    setInput("");
  };

  const handleFileUpload = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    alert(`Uploaded: ${file.name}`);

    onSend(
      `Uploaded medical file: ${file.name}`
    );
  };

  return (
    <div className="chat-window">

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      {messages.length <= 1 && (
        <div className="hero-section">

          <div className="main-orb"></div>

          <div className="hero-text">

            <div className="badge">
              <Sparkles size={16} />
              AI Powered Medical Assistant
            </div>

            <h1>
              Understand your reports instantly
            </h1>

            <p>
              Upload PDFs, ask questions, and get
              intelligent medical insights.
            </p>

            <h2
              style={{
                marginTop: "20px",
                color: "#8ba8ff",
              }}
            >
              Active Chat: {activeChat}
            </h2>

          </div>

        </div>
      )}

      <div className="messages-container">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={
              msg.role === "user"
                ? "message user"
                : "message assistant"
            }
          >
            <strong>
              {msg.role === "user"
                ? "You"
                : "MedGPT"}
            </strong>

            <div className="message-content">
              {msg.content}
            </div>

          </div>

        ))}

      </div>

      <div className="prompt-wrapper">

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />

        <button
          className="upload-btn"
          onClick={() =>
            fileInputRef.current.click()
          }
        >
          <Paperclip size={22} />
        </button>

        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />

        <button
          className="send-btn"
          onClick={submit}
        >
          <Send size={22} />
        </button>

      </div>

    </div>
  );
}