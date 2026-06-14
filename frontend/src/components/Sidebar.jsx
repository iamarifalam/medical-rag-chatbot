import { Plus, MessageSquare } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar({
  chats,
  activeChat,
  onNewChat,
  onSelectChat,
}) {
  return (
    <div className="sidebar">

      <div className="logo">
        MedGPT
      </div>

      <button
        className="new-chat"
        onClick={onNewChat}
      >
        <Plus size={24} />
        New Chat
      </button>

      <div className="chat-list">

        {chats.map((chat) => (

          <button
            key={chat}
            className={
              activeChat === chat
                ? "chat-item active"
                : "chat-item"
            }
            onClick={() => onSelectChat(chat)}
          >
            <MessageSquare size={22} />
            {chat}
          </button>

        ))}

      </div>

    </div>
  );
}