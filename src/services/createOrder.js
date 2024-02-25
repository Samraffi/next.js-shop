import { database } from "@/firebase";
import { addDoc, collection, doc } from "firebase/firestore/lite";

const createOrder = async (productUID, uid) => {
  return await addDoc(
    collection(database, "orders"),
    {
      buy: false,
      count: 1,
      productUID: productUID,
      userUID: uid,
    }
  );
};

export default createOrder;
