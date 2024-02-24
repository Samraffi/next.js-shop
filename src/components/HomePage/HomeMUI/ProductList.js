"use client";

import { useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useBreakPoint from "@/hooks/useBreakPoint";
import getColumnsCount from "@/helpers/getColumnsCount";
import getProductsWithBasketStatus from "@/services/getProductsWithBasketStatus";
import createOrder from "@/services/createOrder";
import Product from "./Product";
import ErrorSnackbar from "./ErrorSnackbar";

const ProductList = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [products, setProducts] = useState([]);
  const userId = window.localStorage.getItem("userId");
  const theme = createTheme();
  const breakPoint = useBreakPoint(theme);
  const spacingValue = 12 / getColumnsCount(breakPoint);

  useEffect(() => {
    getProductsWithBasketStatus(userId)
      .then((data) => null[0] && setProducts(data))
      .catch((err) => {
        handleOpenSnackbar();
        console.log(err);
      });
  }, [userId]);

  const addToCart = (productId) => {
    createOrder(productId, userId).then(() =>
      setProducts(
        products.map((product) => {
          if (product.id === productId) {
            product.inBasket = true;
          }
          return product;
        })
      ).catch((err) => {
        handleOpenSnackbar();
        console.log(err);
      })
    );
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
            userId={userId}
            key={id}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
