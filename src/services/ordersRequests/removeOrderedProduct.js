import { database } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore/lite";

const removeOrderedProduct = async (id) => {
  return await deleteDoc(
    doc(database, "orders", id)
  );
};

export default removeOrderedProduct;

