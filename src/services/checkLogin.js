import getUsers from "./getUsers";

const checkUsers = async (data) => {
  const users = await getUsers();
  console.log("check");
  users.map((user) => {
    if (user.email === data.email && user.password === data.password) {
      localStorage.setItem("userId", JSON.stringify(user.id));
      userDetails = true;
      history.back();
    }
  });
  alert("there is no such a user, try again");
}

export default checkUsers;
