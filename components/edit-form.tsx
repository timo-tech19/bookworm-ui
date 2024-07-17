"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { createBook, updateBook } from "@/actions/book";
import SubmitButton from "./submit-button";
import { Book } from "@prisma/client";
import { toast } from "sonner";

const editBookSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Book title must be at lease 2 characters" }),
  author: z
    .string()
    .min(2, { message: "Author name must be at lease 2 characters" }),
  status: z.string(),
  genre: z.string(),
});

export default function EditForm({ book }: { book: Book }) {
  const form = useForm<z.infer<typeof editBookSchema>>({
    resolver: zodResolver(editBookSchema),
    defaultValues: {
      title: book.title,
      author: book.author,
      status: book.status,
      genre: book.genre,
    },
  });

  async function onSubmit(values: z.infer<typeof editBookSchema>) {
    const updateValues = {
      ...values,
      id: book.id,
    };
    const data = await updateBook(updateValues);

    if (data?.error) toast.error(data.error);
    if (data?.success) toast.success(data.success);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter book title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Enter author name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select book status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="reading">Reading</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                  <SelectItem value="archive">Archive</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input placeholder="Enter your books's genre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Because form is render in a dialog component */}
        <DialogFooter>
          <SubmitButton>Save Changes</SubmitButton>
        </DialogFooter>
      </form>
    </Form>
  );
}
