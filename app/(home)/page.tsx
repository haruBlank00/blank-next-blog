import { GridSmallBackground } from "@/components/ui/grid-small-background";
import { useBlogs } from "../actions/blogs/useBlogs";
import { BlogCards } from "./components/blog-cards";

export default async function Home() {
  const { getAllBlogs } = useBlogs();
  const { data, error } = await getAllBlogs();

  if (error !== null) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <BlogCards blogs={data} />
    </>
  );
}
