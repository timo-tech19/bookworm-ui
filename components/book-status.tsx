import { capitalise, cn } from "@/lib/utils";

interface BookStatusProps {
  bookStatus: string;
}
export default function BookStatus({ bookStatus }: BookStatusProps) {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-lg",
        bookStatus === "unread" && "bg-red-200",
        bookStatus === "reading" && "bg-blue-200",
        bookStatus === "done" && "bg-green-200",
        bookStatus === "archived" && "bg-slate-200"
        // bookStatus === "on-hold" && "bg-orange-200",
        // bookStatus === "dropped" && "bg-purple-200"
      )}
    >
      {capitalise(bookStatus)}
    </span>
  );
}
