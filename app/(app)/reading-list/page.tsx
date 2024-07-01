import { columns } from "@/components/column";
import { DataTable } from "@/components/data-table";
import CreateBookModal from "@/components/modals/create-book-modal";
import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List",
};

export default async function Page() {
  // TODO: Change query to find by user_id
  const data = await prisma.readingList.findUnique({
    where: {
      id: 1,
    },
    include: {
      books: true,
    },
  });

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-1xl uppercase font-semibold mb-4">Reading List</h2>
        <div>
          <CreateBookModal />
        </div>
      </div>
      <DataTable columns={columns} data={data?.books!} />
    </section>
  );
}
