import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2YHRhjxgrN-rk-7MEjAbqyDVOF-WZDjg",
  authDomain: "shoppingjs-6c2c1.firebaseapp.com",
  databaseURL: "https://shoppingjs-6c2c1-default-rtdb.firebaseio.com",
  projectId: "shoppingjs-6c2c1",
  storageBucket: "shoppingjs-6c2c1.appspot.com",
  messagingSenderId: "881178660550",
  appId: "1:881178660550:web:41fe8ff179d74dbf63d1c7",
  measurementId: "G-W0ZECDSRTC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
