import { database } from "@/firebase";
import { setDoc, doc } from "firebase/firestore/lite";

const updateStatusToBuyed = async (idArrays) => {
  return await idArrays.map((id) => (
    setDoc(
      doc(database, "orders", id), { buy: true }, { merge: true }
    )
  ));
};

export default updateStatusToBuyed;
