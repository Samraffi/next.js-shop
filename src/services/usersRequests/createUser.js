import { database } from "@/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const createUser = async (uid, { fname, lname, phone }) => {
  return await setDoc(doc(database, "users", uid), {
    fname, lname, phone
  });
};

export default createUser;
