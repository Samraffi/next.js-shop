import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

export const firebaseConfig = {
  apiKey: "AIzaSyCoegXYgOLeZ3sHYHdHqCJ9Egvu4-RLh64",
  authDomain: "exam-96481.firebaseapp.com",
  databaseURL: "https://exam-96481-default-rtdb.firebaseio.com",
  projectId: "exam-96481",
  storageBucket: "exam-96481.appspot.com",
  messagingSenderId: "256971920275",
  appId: "1:256971920275:web:652d38b79c233b19ed0e66"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);