"use server";

import { firebaseRef } from "@/constants/firebase-ref";
import { db } from "@/lib/firebase.config";
import { TResponse } from "@/types/response";
import { addDoc, collection } from "firebase/firestore";

type CreateReponse = TResponse<{ id: string }>;
export const create = async (
  blogId: string,
  tagId: string,
): Promise<CreateReponse> => {
  const blogTagsRef = collection(db, firebaseRef.blogTags);

  try {
    const id = `${blogId}_${tagId}`;
    const docRef = await addDoc(blogTagsRef, { id, blogId, tagId });
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
