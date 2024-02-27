"use client";

import Header from "@/layouts/Header/Header";
import Container from '@mui/material/Container';
import Contact from "@/components/ContactPage/Contact";
import Footer from "@/layouts/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <Header/>
      <Container sx={{ marginTop: "80px", minHeight: "calc(100vh - 80px - 64px - 20px)" }}>
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
