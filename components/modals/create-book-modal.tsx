"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateForm from "@/components/create-form";
import { useState } from "react";

export default function CreateBookModal() {
  // TODO: Add functionality to close modal when form is submitted.

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Book</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Book</DialogTitle>
          <DialogDescription>
            Add a book to your reading list. It could be a book your read, are
            reading or you want to read.
          </DialogDescription>
        </DialogHeader>
        {/* Form to create books rendered here */}
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
}
