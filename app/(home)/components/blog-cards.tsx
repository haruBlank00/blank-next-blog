import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tags } from "@/components/ui/tags";
import { createdDate } from "@/lib/date-formatter";
import { TBlog } from "@/types/blogs";
import { IconEyeCode, IconMoodHeart } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

const Editor = dynamic(() => import("@/components/editor/blank-mdx-editor"), { ssr: false });

export const BlogCards = ({ blogs }: { blogs: TBlog[] }) => {
  return <div className="flex flex-col gap-4">
    {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
  </div>
}

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { title, tags, content, createdAt, categories, id } = blog;

  const formattedCreateDate = createdDate(createdAt, { timestamp: false });

  const href = `/blogs/${id}`;

  const markdown = content.split(" ").slice(0, 10).join(" ") + "...";
  return <Link href={href}>
    <Card className="dark:bg-neutral-900 cursor-pointer hover:translate-y-[-2px] overflow-hidden">
      <CardHeader className="p-2">
        <CardTitle className="flex justify-between">
          <span className="p-4 capitalize w-full border-none dark:text-neutral-100">{title}</span>

          <span className="p-4 text-nowrap dark:text-neutral-400">
            {formattedCreateDate}
          </span>
        </CardTitle>
        <Tags tags={tags} />
      </CardHeader>

      <CardContent>
        <Suspense fallback={null}>
          <Editor markdown={markdown} readOnly contentEditableClassName="dark:text-neutral-400 p-0 leading-none text-sm" className="bg-none p-0" />
        </Suspense>
      </CardContent>

      <CardFooter>
        <ul className="flex items-center gap-4">
          <li className="flex gap-2 items-center group">
            <IconEyeCode className="dark:text-neutral-400 group-hover:text-blue-400" size={24} />
            <span className="dark:text-neutral-400 group-hover:text-blue-400">{5}</span>
          </li>
          <li className="flex gap-2 items-center group">
            <IconMoodHeart className="dark:text-neutral-400 group-hover:text-red-400" size={24} />
            <span className="dark:text-neutral-400 group-hover:text-red-400">{5}</span>
          </li>
        </ul>
      </CardFooter>
    </Card>
  </Link>
}
