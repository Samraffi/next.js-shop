async function buyBasketItems(id) {
  const response = await fetch(
    `http://localhost:3001/orders`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default buyBasketItems;
