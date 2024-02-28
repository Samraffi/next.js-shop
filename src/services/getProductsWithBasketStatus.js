import getProducts from "./productsRequests/getProducts";
import getOrders from "./ordersRequests/getOrders";

const getProductsWithBasketStatus = async (uid) => {
  let orders = [];
  let orderSnapshot = !!uid ? await getOrders(uid) : []
  let dataSnapshot = await getProducts();

  orderSnapshot.forEach(async (doc) => {
    const {buy, userUID, productUID} = doc?.data();

    if (!buy && userUID === uid) {
      orders.push({ productUID });
    }
  });

  return dataSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc?.id,
    inBasket: orders.some(({ buy, productUID }) => productUID === doc?.id) ? true : false,
  }));
};

export default getProductsWithBasketStatus;
