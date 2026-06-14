import { SendHorizonal, Paperclip } from "lucide-react";

export default function PromptInput() {
  return (
    <div className="p-6">
      
      <div className="max-w-4xl mx-auto bg-white/10 border border-white/10 rounded-3xl backdrop-blur-xl p-4 flex items-center gap-4">
        
        <button className="text-white/70 hover:text-white">
          <Paperclip />
        </button>

        <input
          type="text"
          placeholder="Ask your medical question..."
          className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
        />

        <button className="bg-blue-600 hover:bg-blue-500 transition-all p-3 rounded-2xl">
          <SendHorizonal size={18} />
        </button>

      </div>
    </div>
  );
}