import { database } from "@/firebase";
import { ref, get } from "firebase/database";

async function getUsers() {
    return (await get(ref(database, "/users")))?.val();
}

export default getUsers;
