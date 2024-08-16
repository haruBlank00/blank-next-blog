import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createdDate } from "@/lib/date-formatter"
import { TBlog } from "@/types/blogs"
import { Timestamp } from "firebase/firestore"


export const BlogCards = ({ blogs, onClick }: { blogs: TBlog[], onClick: (blogId: string) => void }) => {
	return blogs.map(blog => <BlogCard key={blog.id} blog={blog} onClick={onClick} />)
}

export const BlogCard = ({ blog, onClick }: { blog: TBlog, onClick: (blogId: string) => void }) => {
	const { title, tags, content, categories, createdAt } = blog;
	const formattedCreatedDate = createdDate(createdAt);

	return <Card onClick={() => onClick(blog.id)} role="button">
		<CardHeader>
			<CardTitle className="flex justify-between">
				{title}


				<span className="text-neutral-400">
					{formattedCreatedDate}
				</span>
			</CardTitle>

		</CardHeader>


		<CardContent>
			{content}
		</CardContent>
	</Card>
}
