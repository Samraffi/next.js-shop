import getProducts from "./getProducts";
import getOrders from "./getOrders";

const getProductsWithBasketStatus = async (userId) => {
  const orders = !!userId ? await getOrders(userId) : [];

  return (await getProducts()).map(({ ...productKeys }) => {
    return {
      ...productKeys,
      inBasket: orders.some(
        (orderItem) => orderItem?.product?.id === productKeys.id
      ),
    };
  });
};

export default getProductsWithBasketStatus;
