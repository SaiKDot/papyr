import type { Metadata } from "next";
import ScopeBar from "@/components/chat/scope-bar";
import ChatView from "@/components/chat/chat-view";

export const metadata: Metadata = {
  title: "Chat & Ask · Papyr",
  description: "RAG chat with grounded citations across your PDF corpus",
};

export default function ChatPage() {
  return (
    <div className="flex flex-col w-full">
      <ScopeBar />
      <ChatView />
    </div>
  );
}
