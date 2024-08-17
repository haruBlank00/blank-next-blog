import { Timestamp } from "firebase/firestore";

export type TTag = {
  id: string;
  label: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
