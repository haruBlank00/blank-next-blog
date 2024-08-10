"use client";

import Typography from "@/components/ui/typography";
import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation"
import { Suspense, useRef } from "react";

const BlankMdxEditor = dynamic(() => import('@/components/editor/blank-mdx-editor'), { ssr: false })

export default function CreateEditBlogPage() {
  const { blogId } = useParams();
  const ref = useRef<MDXEditorMethods>(null)
  return <div>
    <Typography.H1 className="mb-4">
      Create a new Blog
    </Typography.H1>

    <Suspense fallback={<h1>loading...</h1>}>
      <BlankMdxEditor editorRef={ref} markdown="<h1>Hello World</h1>" className="" />
    </Suspense>
  </div>
}
