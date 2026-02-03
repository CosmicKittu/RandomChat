import React, { useState, useEffect, useRef } from "react";

// 1. Define message type
type Message = {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
};

const ChatWindow = () => {
  // 2. Dummy initial data
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey! How are you?", sender: "other", time: "10:00 AM" },
    {
      id: 2,
      text: "I'm good, thanks! Just working on some React code.",
      sender: "me",
      time: "10:01 AM",
    },
    {
      id: 3,
      text: "That sounds cool. Need any help?",
      sender: "other",
      time: "10:02 AM",
    },
  ]);

  const [inputText, setInputText] = useState("");

  // 3. The "Scroll Anchor" Ref
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 4. Auto-scroll function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Trigger scroll whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    // Simulate incoming reply after 1 second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "This is an auto-reply!",
          sender: "other",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1000);
  };

  return (
    // MAIN CONTAINER: Screen height, flex column, subtle background color
    <div className="flex flex-col h-screen bg-gray-100 max-w mx-auto shadow-xl overflow-hidden">
      {/* HEADER */}
      <div className="bg-emerald-600 p-4 text-white flex items-center shadow-md z-10">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>{" "}
        {/* Avatar Placeholder */}
        <div>
          <h1 className="font-bold">Contact Name</h1>
          <p className="text-xs text-emerald-100">Online</p>
        </div>
      </div>

      {/* CHAT AREA: Flex-grow to fill space, scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://camo.githubusercontent.com/c23c5eb29959e7dfc7553556e432df352b2f654b9d0b64d1f56477e7774d06cc/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67')] bg-repeat">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            {/* MESSAGE BUBBLE */}
            <div
              className={`
                max-w-[70%] px-4 py-2 rounded-lg shadow-sm relative
                ${
                  msg.sender === "me"
                    ? "bg-emerald-100 text-gray-800 rounded-tr-none" // Outgoing styles
                    : "bg-white text-gray-800 rounded-tl-none" // Incoming styles
                }
              `}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-[10px] text-gray-500 block text-right mt-1">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        {/* Invisible div to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA: Fixed at bottom */}
      <form
        onSubmit={handleSendMessage}
        className="p-3 bg-gray-100 flex items-center border-t border-gray-200"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500 px-4 mr-2"
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors w-10 h-10 flex items-center justify-center"
        >
          {/* Send Icon (SVG) */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
