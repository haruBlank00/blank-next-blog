import { useBlogs } from "@/app/actions/blogs/useBlogs"
import { Tags } from "@/components/ui/tags";
import Typography from "@/components/ui/typography";
import { createdDate } from "@/lib/date-formatter";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Editor = dynamic(() => import("@/components/editor/blank-mdx-editor"), { ssr: false });

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

	return <div className="p-6">
		<header className="flex flex-col gap-4 mb-4">
			<div className="flex flex-col md:flex-row items-start md:justify-between md:items-end">
				<Typography.H1 className="capitalize dark:text-neutral-400">{title}</Typography.H1>
				<span className="text-neutral-700 text-sm">
					{formattedCreatedDate}
				</span>
			</div>

			<Tags tags={tags} />
		</header>

		<Suspense fallback={<div className="text-white">Loading...</div>}>
			<Editor markdown={content} readOnly className="bg-none p-0" contentEditableClassName="dark:text-neutral-400 px-0" />
		</Suspense>

	</div>
}
