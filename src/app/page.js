"use client";

import Header from "@/layouts/HeaderMUI/Header";
import ProductList from "@/components/HomePage/HomeMUI/ProductList";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";
import { AuthContext } from "@/context/useAuthContext";

export default function HomePage() {
  const { authUser, userSignIn, userSignOut } = useAuthUserAndSignOut();
  let uid = authUser?.uid;

  return (
    <AuthContext.Provider value={{ authUser, userSignIn, userSignOut }}>
      <Header />
      <ProductList uid={uid} />
    </AuthContext.Provider>
  );
}
