async function getOrders(usersId) {
  const response = await fetch(
    `http://localhost:3001/orders?usersId=${usersId}&_expand=products&_expand=users`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default getOrders;
