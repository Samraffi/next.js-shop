import { database } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import getProductData from "./productsRequests/getProductData";

const getOrderedProducts = async (uid) => {
  if (!uid) {
    return [];
  }
  let dataSnapshot = await getDocs(
    query(
      collection(database, "orders"), where("buy", "==", false), where("userUID", "==", uid)
    )
  );

  let returnData = []
  for(let item of dataSnapshot?.docs) {
    returnData.push({
      ...item.data(),
      id: item?.id,
      product: await getProductData(item?.data()?.productUID),
    })
  }
  return returnData;
};

export default getOrderedProducts;
