import BlankMdxEditor from "@/components/editor/blank-mdx-editor"
import Typography from "@/components/ui/typography"
import { TBlog } from "@/types/blogs"

export const BlogPreview = ({ blog }: { blog: TBlog | undefined }) => {
	if (!blog) return <div>
		nothing to show
	</div>

	return <div className="bg-black h-full">
		<Typography.H1 className="p-4 capitalize">{blog.title}</Typography.H1>
		<BlankMdxEditor markdown={blog.content} readOnly />
	</div>
}
