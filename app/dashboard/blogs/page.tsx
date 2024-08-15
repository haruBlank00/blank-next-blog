import { useBlogs } from "@/app/actions/blogs/useBlogs";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { BlogCard, BlogCards } from "./components/blog-card";
import { BlogListPreview } from "./components/blog-list-preview";

export default async function BlogsPage() {
  const { getAllBlogs } = useBlogs()
  const { data = [], error } = await getAllBlogs()

  if (error !== null) {
    return <div>{error.message}</div>
  }

  return <>
    <header className="flex justify-end mb-4">
      <Link href={'/dashboard/blogs/new'}>
        <Button className="flex items-center gap-2" size={"sm"}>
          <IconPlus />
          Add a Blog
        </Button>

      </Link>
    </header>
    <BlogListPreview blogs={data || []} />
  </>
}
