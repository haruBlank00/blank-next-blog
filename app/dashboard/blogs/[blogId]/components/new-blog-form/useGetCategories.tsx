// import { db } from "@/lib/firebase.config"
// import { collection, getDocs } from "firebase/firestore"
import { useEffect } from "react";
import { GET } from "./route";

// const categoriesRef = collection(db, 'categories');

export const useGetCategories = async () => {
	const response = await fetch('/api/categories', {
		method: "GET"
	})
	console.log({ response: await response.json() })

	return {}
}
