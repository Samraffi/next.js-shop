async function checkLogin(email, password) {
  const response = await fetch(
    `http://localhost:3001/users?_email=${email}&password=${password}`,
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

export default checkLogin;
