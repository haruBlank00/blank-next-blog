"use client";

import Typography from "@/components/ui/typography";
import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation"
import { Suspense, useRef } from "react";
import { NewBlogForm } from "./components/new-blog-form";

const BlankMdxEditor = dynamic(() => import('@/components/editor/blank-mdx-editor'), { ssr: false })

export default function CreateEditBlogPage() {
  const { blogId } = useParams();
  const ref = useRef<MDXEditorMethods>(null)

  return <div>
    <Typography.H1 className="mb-4">
      Create a new Blog
    </Typography.H1>

    <NewBlogForm />

  </div>
}
