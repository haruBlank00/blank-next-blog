import { Timestamp } from "firebase/firestore";

export type TBlog = {
  id: string;
  title: string;
  categories: string[];
  tags: string[];
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
