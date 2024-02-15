// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2YHRhjxgrN-rk-7MEjAbqyDVOF-WZDjg",
  authDomain: "shoppingjs-6c2c1.firebaseapp.com",
  databaseURL: "https://shoppingjs-6c2c1-default-rtdb.firebaseio.com",
  projectId: "shoppingjs-6c2c1",
  storageBucket: "shoppingjs-6c2c1.appspot.com",
  messagingSenderId: "881178660550",
  appId: "1:881178660550:web:41fe8ff179d74dbf63d1c7",
  measurementId: "G-W0ZECDSRTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getfirebase(app)
// console.log(app)