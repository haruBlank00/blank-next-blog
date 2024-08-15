import { Timestamp } from "firebase/firestore";

export type TCategory = {
  id: string;
  label: string;
  description: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
