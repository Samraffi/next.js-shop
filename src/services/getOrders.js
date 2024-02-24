import { database } from "@/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import getSnapshotData from "./getSnapshotData";

const getOrders = async (userId) => {
  const ordersData = [];
  const ordersRef = collection(database, "orders");
  const orderSnapshot = await getDocs(ordersRef);

  orderSnapshot.forEach(async (_doc) => {
    const {userRef, productRef, ...orderData} = _doc?.data();

    if (userRef?.id === userId) {
      ordersData.push({
        ...orderData,
        product: await getSnapshotData(productRef?.id),
      });
    }
  });
  return ordersData;
};

export default getOrders;
