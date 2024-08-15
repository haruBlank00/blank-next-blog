import { TBlog } from "@/types/blogs"
import { createUpdate, get, getAll, remove } from "."

export const useBlogs = () => {
	const createUpdateBlog = async (data: Omit<TBlog, 'id'>, id: string) => {
		return await createUpdate(data, id);
	}

	const getAllBlogs = async () => {
		return await getAll();
	}

	const getBlog = async (id: string) => {
		return await get(id);
	}

	const removeBlog = async (id: string) => {
		return await remove(id);
	}

	return {
		createUpdateBlog,
		getAllBlogs,
		getBlog,
		removeBlog
	}
}
