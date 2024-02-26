"use client";

import Header from "@/layouts/Header/Header";
import ProductList from "@/components/HomePage/ProductList";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";
import { AuthContext } from "@/context/useAuthContext";

export default function HomePage() {
  const { authUser: { uid }, userSignIn, userSignOut } = useAuthUserAndSignOut();

  return (
    <AuthContext.Provider value={{ uid, userSignIn, userSignOut }}>
      <Header />
      <ProductList uid={uid} />
    </AuthContext.Provider>
  );
}
