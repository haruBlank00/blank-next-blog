import { TBlog } from "@/types/blogs"
import { createUpdate } from "."

export const useBlogs = () => {
	const createUpdateBlog = async (data: Omit<TBlog, 'id'>, id: string) => {
		return await createUpdate(data, id);
	}

	return {
		createUpdateBlog
	}
}
