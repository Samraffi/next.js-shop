import Header from "@/layouts/Header/Header";
import Basket from "@/components/BasketPage/BasketPageContainer";
import Footer from "@/layouts/Footer/Footer.component";

const BasketPage = () => {
  return (
    <>
      <Header />
      <Basket />
      <Footer topSpaces={true} />
    </>
  );
}

export default BasketPage;
