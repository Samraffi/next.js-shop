import { database } from "@/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const getProducts = async (orders) => {
  const dataRef = collection(database, "products");
  const dataSnapshot = await getDocs(dataRef);

  return dataSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc?.id,
    inBasket: orders.some(({ productUID }) => productUID === doc?.id) ? true : false,
  }));
};

export default getProducts;
