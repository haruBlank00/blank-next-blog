import { useBlogs } from "@/app/actions/blogs/useBlogs"
import BlankMdxEditor from "@/components/editor/blank-mdx-editor";
import { Badge } from "@/components/ui/badge";
import { Tags } from "@/components/ui/tags";
import Typography from "@/components/ui/typography";
import { createdDate } from "@/lib/date-formatter";
import { useParams } from "next/navigation"

export default async function BlogPage({ params }: { params: { blogId: string } }) {
	const { blogId } = params;
	const { getBlog } = useBlogs()
	const { data, error } = await getBlog(blogId)

	if (error !== null) {
		return <div>{error.message}</div>
	}

	if (data === null) {
		return <div>Blog not found</div>
	}

	const { title, content, createdAt, tags } = data;

	const formattedCreatedDate = createdDate(createdAt, { timestamp: false });

	return <div>
		<header className="flex flex-col gap-4 mb-4">
			<div className="flex justify-between items-end">
				<Typography.H1 className="capitalize dark:text-neutral-600">{title}</Typography.H1>
				<span className="text-neutral-700 text-sm">
					{formattedCreatedDate}
				</span>
			</div>

			<Tags tags={tags} />
		</header>

		<BlankMdxEditor markdown={content} readOnly className="bg-none p-0" contentEditableClassName="dark:text-neutral-200 px-0" />
	</div>
}
