"use client";

import { useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useBreakPoint from "@/hooks/useBreakPoint";
import getColumnsCount from "@/helpers/getColumnsCount";
import getProductsWithBasketStatus from "@/services/getProductsWithBasketStatus";
import createOrder from "@/services/ordersRequests/createOrder";
import Product from "./Product";
import ErrorSnackbar from "./ErrorSnackbar";

const ProductList = ({ uid }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [products, setProducts] = useState([]);
  const theme = createTheme();
  const breakPoint = useBreakPoint(theme);
  const spacingValue = 12 / getColumnsCount(breakPoint);

  useEffect(() => {
    getProductsWithBasketStatus(uid)
      .then((data) => setProducts(data))
      .catch((err) => {
        handleOpenSnackbar();
        console.log(err);
      });
  }, [uid]);

  const addToCart = (productId) => {
    createOrder(productId, uid)
      .then(() => (
        setProducts(
          products.map((product) => {
            if (product.id === productId) {
              product.inBasket = true;
            }
            return product;
          })
        )
      ))
      .catch((err) => {
        handleOpenSnackbar();
        console.log(err);
      });
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <ErrorSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
      />
      <Grid sx={{ width: { sm: "90%" } }} container spacing={spacingValue}>
        {products.map(({ id, images, title, price, inBasket }) => (
          <Product
            id={id}
            images={images}
            title={title}
            price={price}
            inBasket={inBasket}
            addToCart={addToCart}
            spacingValue={spacingValue}
            key={id}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
