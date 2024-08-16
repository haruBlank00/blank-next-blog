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
  Timestamp,
} from "firebase/firestore";
import { nanoid } from "nanoid";

export const createUpdate = async (
  props: Partial<TBlog>,
  docId: string | null,
): Promise<TResponse<{ id: string }>> => {
  const id = docId || nanoid();
  const docRef = doc(db, firebaseRef.blogs, id);

  try {
    const dataToSave = {
      ...props,
      updatedAt: Timestamp.now(),
      ...(!docId ? { createdAt: Timestamp.now() } : {}),
    };
    await setDoc(docRef, dataToSave);

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
