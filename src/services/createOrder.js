import { database } from "@/firebase";
import { addDoc, collection, doc } from "firebase/firestore/lite";

const createOrder = async (productId, userId) => {
  await addDoc(
    collection(database, "orders"),
    {
      buy: false,
      count: 1,
      productRef: doc(database, "products", productId),
      userRef: doc(database, "users", userId),
    }
  );
};

export default createOrder;
