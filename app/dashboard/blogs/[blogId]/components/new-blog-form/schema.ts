import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  tags: z.array(z.string()).min(1, { message: "Tags is required" }),
  categories: z.array(z.string()).min(1, { message: "Categories is required" }),
});

export const resolver = zodResolver(formSchema);

export type TNewBlogValues = z.infer<typeof formSchema>;

export const defaultValues: TNewBlogValues = {
  title: "",
  content: "",
  tags: [],
  categories: [],
};
