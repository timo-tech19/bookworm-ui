"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

type NewBook = {
  title: string;
  author: string;
  status: "unread" | "reading" | "done" | "archive";
  genre: string;
  // TODO: Add reading list field from authenticated user.
};

export async function createBook(values: NewBook) {
  // TODO: check permissions

  // create a new book
  try {
    await prisma.book.create({
      data: {
        title: values.title,
        author: values.author,
        status: values.status,
        genre: values.genre,
        // TODO: Add reading list field from authenticated user.
        readingListId: 1,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Could not create new book");
  }

  revalidatePath("/reading-list");
}

export async function deleteBook(bookId: number) {
  // TODO: check permissions

  // delete a book
  try {
    await prisma.book.delete({
      where: {
        id: bookId,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Could not delete book");
  }

  revalidatePath("/reading-list");
}
