import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TBlog } from "@/types/blogs"


export const BlogCards = ({ blogs, onClick }: { blogs: TBlog[], onClick: (blogId: string) => void }) => {
	return blogs.map(blog => <BlogCard key={blog.id} blog={blog} onClick={onClick} />)
}

export const BlogCard = ({ blog, onClick }: { blog: TBlog, onClick: (blogId: string) => void }) => {
	return <Card onClick={() => onClick(blog.id)} role="button">
		<CardHeader>
			<CardTitle>
				{blog.title}
			</CardTitle>
		</CardHeader>


		<CardContent>
			{blog.content}
		</CardContent>
	</Card>
}
