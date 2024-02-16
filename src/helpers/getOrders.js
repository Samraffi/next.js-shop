import { database } from "@/firebase";
import { ref, get } from "firebase/database";

async function getOrders() {
    return (await get(ref(database, "/orders")))?.val();
}

export default getOrders;
