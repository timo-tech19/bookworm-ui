"use client";

import { Edit } from "lucide-react";
import { Book } from "@prisma/client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditForm from "@/components/edit-form";
import { useEditBook } from "@/hooks/use-edit-book";

export default function EditBookModal({ book }: { book: Book }) {
  const { isOpen, setIsOpen } = useEditBook();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* TODO: Remove this and change to external trigger */}
      <DialogTrigger asChild>
        <Button>
          <Edit className="h-5 w-5 mr-2" />
          <span>Edit Book</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>
        {/* Form to edit books rendered here */}
        <EditForm book={book} />
      </DialogContent>
    </Dialog>
  );
}
