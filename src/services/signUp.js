
import getUsers from "./getUsers";
import signUpUser from "./register";
export default async function signUp(data) {
    const users = await getUsers();
    users.map((user) => {
      if (user.email === data.email) {
        alert('there is already an user with this email. Please sign up with other email or just login')
      } else {
        signUpUser(data)
      }
    });
  }