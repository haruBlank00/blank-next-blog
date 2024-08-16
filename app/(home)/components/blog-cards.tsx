import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createdDate } from "@/lib/date-formatter";
import { TBlog } from "@/types/blogs";
import Link from "next/link";

export const BlogCards = ({ blogs }: { blogs: TBlog[] }) => {
  return <>
    {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
  </>
}

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { title, tags, content, createdAt, categories, id } = blog;

  const formattedCreateDate = createdDate(createdAt, { timestamp: false });

  const href = `/blogs/${id}`;

  return <Link href={href}>
    <Card className="bg-neutral-900 cursor-pointer hover:translate-y-[-2px] overflow-hidden">
      <CardHeader className="p-2">
        <CardTitle className="flex justify-between">
          <span className="p-4 capitalize w-full border-none text-neutral-100">{title}</span>

          <span className="p-4 text-nowrap text-neutral-400">
            {formattedCreateDate}
          </span>
        </CardTitle>
      </CardHeader>
      <div className="flex justify-between">


      </div>


      <CardContent>
        <ul>
          {
            tags.map(tag => <li key={tag}>
              <Badge variant={'outline'}>
                #{tag.trim()}
              </Badge>
            </li>)
          }
        </ul>
      </CardContent>
    </Card>
  </Link>
}
