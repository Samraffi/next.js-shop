async function changeCountBasketItems(id, newQuantity) {
  const response = await fetch(
    `http://localhost:3001/orders/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: newQuantity
      })
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default changeCountBasketItems;
