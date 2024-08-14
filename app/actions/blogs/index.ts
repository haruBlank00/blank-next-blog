"use server";

import { firebaseRef } from "@/constants/firebase-ref";
import { db } from "@/lib/firebase.config";
import { TBlog } from "@/types/blogs";
import { doc, setDoc } from "firebase/firestore";

export const createUpdate = async (props: Omit<TBlog, "id">, docId: string) => {
  const docRef = doc(db, firebaseRef.blogs, docId);

  try {
    await setDoc(docRef, props);
    return {
      data: {
        id: docRef.id,
      },
      error: null,
    };
  } catch (e) {
    return {
      data: null,
      error: {
        message: (e as Error).message,
      },
    };
  }
};
