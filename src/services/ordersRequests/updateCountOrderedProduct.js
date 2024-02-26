import { database } from "@/firebase";
import { setDoc, doc } from "firebase/firestore/lite";

const updateCountOrderedProduct = async (id, count) => {
  return await setDoc(
    doc(database, "orders", id), { count }, { merge: true }
  );
};

export default updateCountOrderedProduct;
