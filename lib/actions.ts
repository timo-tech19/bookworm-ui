"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

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

    revalidatePath("/reading-list");
  } catch (error) {
    console.log(error);
    throw new Error("Could not create new book");
  }
}

export async function updateBook(values: UpdateBook) {
  try {
    const updatedBook = await prisma.book.update({
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
  } catch (error) {
    console.log(error);
    throw new Error("Could not update book");
  }
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

    revalidatePath("/reading-list");
  } catch (error) {
    console.log(error);
    throw new Error("Could not delete book");
  }
}
