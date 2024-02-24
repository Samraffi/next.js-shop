import { database } from "@/firebase";
import { doc, getDoc } from "firebase/firestore/lite";

const getSnapshotData = async (refId) => {
  const snapshot = await getDoc(doc(database, "products", refId));

  if (snapshot.exists()) {
    return { ...snapshot.data(), id: snapshot.id };
  }

  return null;
};

export default getSnapshotData;
