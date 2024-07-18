"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DoorOpen, MoreHorizontal, Trash } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { capitalise } from "@/lib/utils";
import { deleteBook } from "@/actions/book";
import BookStatus from "./book-status";
import { Book } from "@prisma/client";

export const columns: ColumnDef<Book>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <span>{row.index + 1}</span>;
    },
  },
  {
    header: "Title",
    accessorKey: "title",
    cell: ({ row }) => {
      return (
        <Link
          href={`/books/${row.original.id}`}
          className="font-semibold underline"
        >
          {row.original.title}
        </Link>
      );
    },
  },
  {
    header: "Author",
    accessorKey: "author",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => <BookStatus bookStatus={row.original.status} />,
  },
  {
    header: "Genre",
    accessorKey: "genre",
    cell: ({ row }) => {
      return <span>{capitalise(row.original.genre)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={`/books/${book.id}`} className="flex items-center">
                <DoorOpen className="h-5 w-5 mr-2" />
                <span>Open</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => deleteBook(book.id)}>
              <Trash className="h-5 w-5 mr-2" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
