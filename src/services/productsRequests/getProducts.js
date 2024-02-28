import { database } from "@/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const getProducts = async () => {
  return await getDocs(
    collection(database, "products")
  );
};

export default getProducts;
