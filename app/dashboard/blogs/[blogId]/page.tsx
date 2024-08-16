"use client";

import Typography from "@/components/ui/typography";
import { NewBlogForm } from "./components/new-blog-form";


export default function CreateEditBlogPage() {
  return <div>
    <Typography.H1 className="mb-4">
      Create a new Blog
    </Typography.H1>

    <NewBlogForm />

  </div>
}
