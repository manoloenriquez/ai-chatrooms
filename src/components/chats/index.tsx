"use client";

import ChatBody from "./chatbody";
import ChatList from "./chatlist";

export default function Chats() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:max-w-sm flex flex-col border-r">
        <div className="py-5 px-5 border-b">Chat List Header</div>
        <ChatList className="overflow-y-auto" />
      </div>
      <div className="flex-1 hidden md:block">
        <ChatBody />
      </div>
    </div>
  );
}
