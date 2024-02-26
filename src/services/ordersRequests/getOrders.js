import { database } from "@/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const getOrders = async () => {
  return await getDocs(
    collection(database, "orders")
  );
};

export default getOrders;
