import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase.config";

const categoriesRef = collection(db, "blog-category");

export async function GET(request: Request) {
  const data = { ok: "test pass" };
  const documents = await getDocs(categoriesRef);
  console.clear();
  documents.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });

  return Response.json(data);
}
