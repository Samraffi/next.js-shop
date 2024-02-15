import "./connecionDb"
async function loginUser() {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app, "https://shoppingjs-6c2c1-default-rtdb.firebaseio.com/");
    const usersSnapshot = await get(ref(db, '/users'));
    let users = usersSnapshot.val()
    users.map((user) => {
        if (user.email === email && user.password === psw) {
            
        }
    })
}