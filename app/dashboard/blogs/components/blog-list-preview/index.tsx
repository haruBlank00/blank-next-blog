"use client";

import { TBlog } from "@/types/blogs";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { BlogCards } from "../blog-card";
import { useMemo, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const BlogListPreview = ({ blogs = [] }: { blogs: TBlog[] }) => {
	const [previewBlogId, setPreiewBlogId] = useState<string | null>(null)

	const onBlogClick = (blogId: string) => {
		setPreiewBlogId(blogId)
	}

	const selectedBlog = useMemo(() => blogs.find(blog => blog.id === previewBlogId), [previewBlogId, blogs])

	return <ResizablePanelGroup direction="horizontal"
		className="flex-1 rounded-lg border dark:border-neutral-600 dark:bg-neutral-900">
		<ResizablePanel defaultSize={45} className="p-4">
			<ScrollArea className="h-[35rem]">
				<BlogCards blogs={blogs} onClick={onBlogClick} />
			</ScrollArea>
		</ResizablePanel>

		<ResizableHandle withHandle className="border-neutral-600" />

		<ResizablePanel defaultSize={55} className="p-4">
			<ScrollArea className="h-[35rem]">
				{selectedBlog?.title}
			</ScrollArea>
		</ResizablePanel>
	</ResizablePanelGroup>
}
