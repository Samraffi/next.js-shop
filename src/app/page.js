"use client";

import Header from "@/layouts/Header/Header";
import Container from '@mui/material/Container';
import ProductList from "@/components/HomePage/ProductList";
import Footer from "@/layouts/Footer/Footer";

export default function HomePage() {

  return (
    <>
      <Header />
      <Container sx={{ marginTop: "80px", minHeight: "calc(100vh - 80px - 64px - 20px)" }}>
        <ProductList />
      </Container>
      <Footer topSpaces={true} />
    </>
  );
}
