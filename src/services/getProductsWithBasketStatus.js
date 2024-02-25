import getProducts from "./getProducts";
import getOrders from "./getOrders";

const getProductsWithBasketStatus = async (uid) => {
  let orders = [];
  let orderSnapshot = !!uid ? await getOrders(uid) : []
  let dataSnapshot = await getProducts();

  orderSnapshot.forEach(async (doc) => {
    const {userUID, productUID} = doc?.data();

    if (userUID === uid) {
      orders.push({ productUID });
    }
  });

  return dataSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc?.id,
    inBasket: orders.some(({ productUID }) => productUID === doc?.id) ? true : false,
  }));
};

export default getProductsWithBasketStatus;
