import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {

  const [activeChat, setActiveChat] =
    useState("Diabetes Report");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Hello. Upload your medical reports and ask anything.",
      },
    ]);

  const chats = [
    "Diabetes Report",
    "Heart Disease PDF",
  ];

  const handleNewChat = () => {

    setActiveChat("New Chat");

    setMessages([
      {
        role: "assistant",
        content:
          "Started a fresh medical conversation.",
      },
    ]);
  };

  const handleSelectChat = (chat) => {

    setActiveChat(chat);

    setMessages([
      {
        role: "assistant",
        content: `Opened ${chat}`,
      },
    ]);
  };

  const handleSend = async (text) => {

    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: text,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ||
            "No response from backend.",
        },
      ]);

    } catch (error) {

      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Backend connection failed.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />

      <ChatWindow
        activeChat={activeChat}
        messages={
          loading
            ? [
                ...messages,
                {
                  role: "assistant",
                  content: "Thinking...",
                },
              ]
            : messages
        }
        onSend={handleSend}
      />
    </div>
  );
}