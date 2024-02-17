async function selectBasketItemsToDb(data, quantity, usersTocken) {
  const response = await fetch(
    `http://localhost:3001/orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        buy: false,
        productsId: data.productsId,
        quantity: productsId && productsId.quantity ? productsId.quantity: 1,
        usersTocken,
      })
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default selectBasketItemsToDb;
