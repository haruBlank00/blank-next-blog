"use server";

import { firebaseRef } from "@/constants/firebase-ref";
import { db } from "@/lib/firebase.config";
import { TBlog } from "@/types/blogs";
import { TResponse } from "@/types/response";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

export const createUpdate = async (
  props: Omit<TBlog, "id">,
  docId: string,
): Promise<TResponse<{ id: string }>> => {
  const docRef = doc(db, firebaseRef.blogs, docId);

  try {
    await setDoc(docRef, props);
    const { tags, categories, title, content } = props;
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

export const getAll = async (): Promise<TResponse<TBlog[]>> => {
  const collectionRef = collection(db, firebaseRef.blogs);
  try {
    const data = await getDocs(collectionRef);
    return {
      data: data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as TBlog[],
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

export const get = async (blogId: string): Promise<TResponse<TBlog>> => {
  const docRef = doc(db, firebaseRef.blogs, blogId);
  try {
    const docSnap = await getDoc(docRef);
    return {
      data: { id: docSnap.id, ...docSnap.data() } as TBlog,
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

export const remove = async (blogId: string) => {
  const docRef = doc(db, firebaseRef.blogs, blogId);
  try {
    await deleteDoc(docRef);
    return {
      data: null,
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
