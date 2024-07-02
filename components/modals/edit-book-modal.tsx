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

export default function EditBookModal({ book }: { book: Book }) {
  // TODO: Add functionality to close modal when form is submitted.

  return (
    <Dialog>
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
        {/* Form to create books rendered here */}
        <EditForm book={book} />
      </DialogContent>
    </Dialog>
  );
}
