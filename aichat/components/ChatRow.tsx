"use client";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, Query, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    query(collection(db, "users", session?.user?.email!, "chats", id, "messages"),
    orderBy("createdAt", "asc"))
  );
  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    const shouldDelete = confirm("Are you sure you want to delete this chat?");
    if (shouldDelete) {
      await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
      router.replace("/");
    }
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center mt-3 ${active && "bg-gray-700/50"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 truncate">
      {messages?.docs?.[messages.docs.length - 1]?.data().text ?? "New Chat"}
      </p>

      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 transition-all duration-200 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
