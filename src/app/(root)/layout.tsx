import ChatBody from "@/components/chats/chatbody";
import "../globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen flex flex-wrap">
        <div className="w-full md:max-w-sm flex flex-col border-r">
          {children}
        </div>
        <div className="flex-1 hidden md:block">
          <ChatBody />
        </div>
      </div>

      <nav className="border-t md:border-r bg-white w-full md:max-w-sm absolute bottom-0 py-4">
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/">Chats</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
