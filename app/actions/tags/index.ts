import { firebaseRef } from "@/constants/firebase-ref";
import { db } from "@/lib/firebase.config";
import { TResponse } from "@/types/response";
import { TTag } from "@/types/tags";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  Timestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { nanoid } from "nanoid";

type TCreateProps = Pick<TTag, "label">[];
type TCreateResponse = TResponse<string[]>;

export const create = async (tags: TCreateProps): Promise<TCreateResponse> => {
  try {
    const createdDate = Timestamp.now();

    const batch = writeBatch(db);
    const tagsCollectionRef = collection(db, firebaseRef.tags);

    const existingTagsQuery = query(
      tagsCollectionRef,
      where(
        "label",
        "in",
        tags.map((tag) => tag.label),
      ),
    );
    const existingTagsSnapshot = await getDocs(existingTagsQuery);
    const existingTagLables = existingTagsSnapshot.docs.map(
      (doc) => doc.data().label,
    );

    const newTagsId: string[] = [];
    tags.forEach((tag) => {
      const sanitizedTag = tag.label.toLowerCase().trim();

      const tagAlreadyExist = existingTagLables.includes(sanitizedTag);
      if (tagAlreadyExist) {
        return;
      }

      const id = nanoid();
      const docRef = doc(tagsCollectionRef, id);

      batch.set(docRef, {
        tag,
        createdDate,
      });

      newTagsId.push(id);
    });

    await batch.commit();

    return {
      data: newTagsId,
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
