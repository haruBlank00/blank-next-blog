"use server";

import { db } from "@/lib/firebase.config";
import { collection, getDocs } from "firebase/firestore";

const categoriesRef = collection(db, "categories");

export const getCategories = async () => {
  const querySnapshot = await getDocs(categoriesRef);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });

  return { ok: "ok" };
};
