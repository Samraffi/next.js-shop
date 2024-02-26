"use client";

import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { StyledBasket } from "./Basket/Basket.style";

import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";
import getOrderedProducts from "@/services/getOrderedProducts";
import OrdersDataAndModals from "./OrdersData/OrdersDataAndModals";
import BasketsList from "./Basket/BasketsList";

function BasketPageContainer() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const { authUser: { uid } } = useAuthUserAndSignOut();

  useEffect(() => {
    getOrderedProducts(uid)
      .then((data) => {
        setOrderedProducts(data);
      })
      .catch((err) => console.log(err));
  }, [uid]);

  return (
    <StyledBasket>
      <Typography variant="h4" align="center" gutterBottom>
        Basket
      </Typography>
      <Grid container spacing={2}>
        <BasketsList
          orderedProducts={orderedProducts}
          setOrderedProducts={setOrderedProducts}
        />
        <OrdersDataAndModals
          orderedProducts={orderedProducts}
        />
      </Grid>
    </StyledBasket>
  );
}

export default BasketPageContainer;
