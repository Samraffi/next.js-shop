import getProducts from "./getProducts";
import getOrders from "./getOrders";

const getProductsWithBasketStatus = async (uid) => {
  return await getProducts(
    !!uid ? await getOrders(uid) : []
  );
};

export default getProductsWithBasketStatus;
