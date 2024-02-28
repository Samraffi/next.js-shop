import Header from "@/layouts/Header/Header";
import Container from '@mui/material/Container';
import About from "@/components/AboutPage/About";
import Footer from "@/layouts/Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "80px", minHeight: "calc(100vh - 80px - 64px - 20px)" }}>
        <About />
      </Container>
      <Footer topSpaces={true} />
    </>
  );
};

export default AboutPage;
