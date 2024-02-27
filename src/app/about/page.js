import Header from "@/layouts/Header/Header";
import About from "@/components/AboutPage/About";
import Footer from "@/layouts/Footer/Footer.component";

const AboutPage = () => {
  return (
    <>
      <Header />
      <About />
      <Footer topSpaces={true} />
    </>
  );
};

export default AboutPage;
