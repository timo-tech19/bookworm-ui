import { BookCopy, CircleDashed, User2 } from "lucide-react";

import BookStatus from "@/components/book-status";
import EditBookModal from "@/components/modals/edit-book-modal";
import { db } from "@/lib/db";
import { capitalise } from "@/lib/utils";

interface PageProps {
  params: {
    bookId: string;
  };
}
export default async function Page({ params }: PageProps) {
  const book = await db.book.findUnique({
    where: {
      id: Number(params.bookId),
    },
  });

  if (!book) return <div>Book Not Found</div>;

  return (
    <section className="pt-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-4xl uppercase text-primary">
          {book.title}
        </h2>
        <EditBookModal book={book} />
      </div>
      <div className="flex flex-col gap-4 mt-6 mx-6">
        {/* TODO: fix alignment with css grid */}
        <p className="flex items-center gap-x-10">
          <span className="flex items-center text-slate-500">
            <User2 className="w-6 h-6 mr-2" />
            <span>Author</span>
          </span>
          <span className="flex-1 font-semibold">{book?.author}</span>
        </p>
        <hr />
        <p className="flex items-center gap-x-10">
          <span className="flex items-center text-slate-500">
            <CircleDashed className="w-6 h-6 mr-2" />
            <span>Status</span>
          </span>
          <span className="flex-1">
            <BookStatus bookStatus={book.status} />
          </span>
        </p>
        <hr />
        <p className="flex items-center gap-x-10">
          <span className="flex items-center text-slate-500">
            <BookCopy className="w-6 h-6 mr-2" />
            <span>Genre</span>
          </span>
          <span className="flex-1 font-semibold">
            {book.genre && capitalise(book.genre)}
          </span>
        </p>
      </div>
      <div className="mt-10 text-sm text-slate-400">
        Notes feature coming soon...
      </div>
    </section>
  );
}
