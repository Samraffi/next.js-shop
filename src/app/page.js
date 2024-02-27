"use client";

import Header from "@/layouts/Header/Header";
import ProductList from "@/components/HomePage/ProductList";
import Footer from "@/layouts/Footer/Footer.component";

export default function HomePage() {

  return (
    <>
      <Header />
      <ProductList />
      <Footer topSpaces={true} />
    </>
  );
}
