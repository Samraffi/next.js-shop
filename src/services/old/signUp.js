
import getUsers from "./getUsers";
import signUpUser from "./register";
export default async function signUp(data) {
    const users = await getUsers();
    let userDetails
    users.map((user) => {
      if (user.email === data.email) {
        userDetails = user
      }
    });
    if(userDetails) {
        alert("Email already in use")
    } else {
        return await signUpUser(data)
    }
  }