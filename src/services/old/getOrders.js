async function getOrders(usersTocken) {
  const response = await fetch(
    `http://localhost:3001/orders?usersTocken=${usersTocken}&_expand=products&_expand=users.tocken`,
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
