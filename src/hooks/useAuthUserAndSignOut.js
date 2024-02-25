"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';

export const useAuthUserAndSignOut = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignIn = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignUp = ({ email, psw }) => {
    return createUserWithEmailAndPassword(auth, email, psw)
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return { authUser, userSignIn, userSignUp, userSignOut };
}