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
import { capitalise, cn } from "@/lib/utils";

export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  status: string;
  readingListId: number;
};

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
          href={`/books/${+row.original.id}}`}
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
    cell: ({ row }) => {
      const bookStatus = row.original.status;

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
    },
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
      // Use later to delete book
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
              <DoorOpen className="h-5 w-5 mr-2" />
              <span>Open</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="h-5 w-5 mr-2" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];