import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

import { firebaseConfig } from "../services/connecionDb";

async function getProducts() {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app, "https://shoppingjs-6c2c1-default-rtdb.firebaseio.com/");
    const productsSnapshot = await get(ref(db, '/products'));
    let products = productsSnapshot.val();

    return products;
}

export default getProducts