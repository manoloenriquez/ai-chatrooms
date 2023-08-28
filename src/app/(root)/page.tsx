import Chats from "@/components/chats";
import ChatList from "@/components/chats/chatlist";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  return (
    <main>
      <Chats />
    </main>
  );
}
