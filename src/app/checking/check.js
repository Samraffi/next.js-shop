
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

import {firebaseConfig} from "../../services/connecionDb"

async function getProducts() {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app, "https://shoppingjs-6c2c1-default-rtdb.firebaseio.com/");
    const productsSnapshot = await get(ref(db, '/products'));
    let products = productsSnapshot.val()

    let orderDetailSnapshot = await get(ref(db, "/orderDetails"))
    let orderDetails = orderDetailSnapshot.val()

    let orderProducts = []

    orderDetails.map((elem) => {
      if (elem[order_id] === 1) {
        products.map((product) => {
          if(product.id === elem[product_id]) {
            orderProducts.push()
          }
        })
      }
    })


    return products
}

export default getProducts