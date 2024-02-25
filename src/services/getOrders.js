import { database } from "@/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const getOrders = async (uid) => {
  let ordersData = [];
  const ordersRef = collection(database, "orders");
  const orderSnapshot = await getDocs(ordersRef);

  orderSnapshot.forEach(async (doc) => {
    const {userUID, productUID} = doc?.data();

    if (userUID === uid) {
      ordersData.push({ productUID });
    }
  });

  return ordersData;
};

export default getOrders;
