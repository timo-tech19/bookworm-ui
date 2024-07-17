"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserReadingListByUserId } from "@/data/reading-list";

type NewBook = {
  title: string;
  author: string;
  status: string;
  genre: string;
  // TODO: Add reading list field from authenticated user.
};

type UpdateBook = {
  id: number;
  title: string;
  author: string;
  status: string;
  genre: string;
  // TODO: Add reading list field from authenticated user.
};

export async function createBook(values: NewBook) {
  // check permissions
  const user = await currentUser();
  if (!user || !user.id) return;

  // get user reading list
  const userReadingList = await getUserReadingListByUserId(user.id);

  if (!userReadingList) return { error: "Reading list not found" };

  // create a new book
  try {
    await db.book.create({
      data: {
        title: values.title,
        author: values.author,
        status: values.status,
        genre: values.genre,
        readingListId: userReadingList.id,
      },
    });

    revalidatePath("/reading-list");
    return { success: "Book added to reading list" };
  } catch (error) {
    console.log(error);
    return { error: "Error creating book" };
  }
}

export async function updateBook(values: UpdateBook) {
  // check permissions
  const user = await currentUser();
  if (!user || !user.id) return;

  try {
    const updatedBook = await db.book.update({
      where: {
        id: values.id,
      },
      data: {
        title: values.title,
        author: values.author,
        status: values.status,
        genre: values.genre,
      },
    });

    revalidatePath(`/books/${updatedBook.id}`);
    return { success: "Book updated!" };
  } catch (error) {
    console.log(error);
    return { error: "Error updating book" };
  }
}

export async function deleteBook(bookId: number) {
  // TODO: check permissions
  const user = await currentUser();
  if (!user) return;

  // delete a book
  try {
    await db.book.delete({
      where: {
        id: bookId,
      },
    });

    revalidatePath("/reading-list");
    return { success: "Book deleted!" };
  } catch (error) {
    console.log(error);
    return { error: "Error deleting book." };
  }
}
