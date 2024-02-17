import getUsers from "./getUsers";
import { useRouter } from "next/navigation";

export default async function checkUsers(data) {
  const users = await getUsers();
  const router = useRouter();
  users.map((user) => {
    if (user.email === data.email && user.password === data.password) {
      console.log("yes");
      localStorage.setItem("userId", JSON.stringify(user.id));
      router.back()
    }
  });
}
