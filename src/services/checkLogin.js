import getUsers from "./getUsers";
// import { useRouter } from "next/navigation";

export default async function checkUsers(data) {
  const users = await getUsers();
  users.map((user) => {
    if (user.email === data.email && user.password === data.password) {
      localStorage.setItem("userId", JSON.stringify(user.id));
      history.back();
    } else {
      alert("there is no such a user, try again");
    }
  });
}
