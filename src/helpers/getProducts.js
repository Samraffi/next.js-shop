import { database } from "@/firebase";
import { ref, get } from "firebase/database";

async function getProducts() {
    const productsSnapshot = await get(ref(database, '/products'));
    let products = productsSnapshot.val();

    return products;
}

export default getProducts;
