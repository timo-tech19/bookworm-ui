import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const bookSchema = z.object({
  id: z.optional(z.number()),
  title: z
    .string()
    .min(2, { message: "Book title must be at lease 2 characters" }),
  author: z
    .string()
    .min(2, { message: "Author name must be at lease 2 characters" }),
  status: z.enum(["unread", "reading", "done", "archive"]),
  genre: z.string(),
  rating: z.optional(z.union([z.string(), z.number()])).nullable(),
  startDate: z.optional(z.date()),
  endDate: z.optional(z.date()),
});
