import { database } from "@/firebase";
import { doc, getDoc } from "firebase/firestore/lite";

const getSnapshotData = async (refId) => {
  const snapshot = await getDoc(doc(database, "products", refId));

  if (snapshot.exists()) {
    return { ...snapshot.data() };
  }

  return null;
};

export default getSnapshotData;