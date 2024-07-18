import { capitalise, cn } from "@/lib/utils";
import { BookStatus as BookStatusType } from "@prisma/client";

interface BookStatusProps {
  bookStatus: BookStatusType;
}
export default function BookStatus({ bookStatus }: BookStatusProps) {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-lg",
        bookStatus === "unread" && "bg-red-200",
        bookStatus === "reading" && "bg-blue-200",
        bookStatus === "done" && "bg-green-200",
        bookStatus === "archive" && "bg-slate-200"
      )}
    >
      {capitalise(bookStatus)}
    </span>
  );
}
