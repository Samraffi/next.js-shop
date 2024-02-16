import { database } from "@/firebase";
import { ref, get } from "firebase/database";

async function getProducts() {
    return (await get(ref(database, "/products")))?.val();
}

export default getProducts;
