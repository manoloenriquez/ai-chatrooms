"use client";

import ChatBody from "./chatbody";
import ChatList from "./chatlist";

export default function Chats() {
  return (
    <div className="h-screen flex flex-col">
      <div className="py-5 px-5 border-b">Chat List Header</div>
      <ChatList className="overflow-y-auto" />
    </div>
  );
}
