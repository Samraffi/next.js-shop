import getOrders from "./getOrders";
import getUsers from "./getUsers";
import getProducts from "./getProducts";

async function getDataForOrder() {
  let userIdLocalStorage = 2;
  const ordersSnapshot = await getOrders();
  const usersSnapshot = await getUsers();
  const productsSnapshot = await getProducts();

  let user = usersSnapshot.find(({ id }) => userIdLocalStorage === id);
  if(user) {
    let order = ordersSnapshot.filter(
      ({ user_id }) => userIdLocalStorage === user_id
    );
    let product = productsSnapshot.filter(({ id }) =>
      order.find(({ product_id }) => id === product_id)
    );

    return order.map(({ user_id, product_id, ...orderKeys }) => {
      return {
        userData: user,
        productData: product.length === 1 ? product[0] : product,
        orderKeys,
      };
    });
  }

  return "User is not found";
}

export default getDataForOrder;
