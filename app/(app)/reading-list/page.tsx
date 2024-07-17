import { columns } from "@/components/column";
import { DataTable } from "@/components/data-table";
import CreateBookModal from "@/components/modals/create-book-modal";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List",
};

export default async function Page() {
  const user = await currentUser();
  const data = await db.readingList.findUnique({
    where: {
      userId: user?.id,
    },
    include: {
      books: true,
    },
  });

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-1xl uppercase font-semibold">Reading List</h2>
        <CreateBookModal />
      </div>
      {data?.books.length ? (
        <DataTable columns={columns} data={data?.books!} />
      ) : (
        <div className="text-center text-muted-foreground mt-6">
          Please add new books to your reading list
        </div>
      )}
    </section>
  );
}
