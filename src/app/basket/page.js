import Header from "@/layouts/Header/Header";
import Container from '@mui/material/Container';
import Basket from "@/components/BasketPage/BasketPageContainer";
import Footer from "@/layouts/Footer/Footer";

const BasketPage = () => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "80px", minHeight: "calc(100vh - 80px - 64px - 20px)" }}>
        <Basket />
      </Container>
      <Footer topSpaces={true} />
    </>
  );
}

export default BasketPage;
