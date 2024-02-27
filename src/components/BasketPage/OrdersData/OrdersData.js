"use client";

import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import CheckboxToAcceptTheTerms from "./CheckboxToAcceptTheTerms";

import { StyledBasketTotal, StyledBasketBuyButton } from "../Basket/Basket.style";

const OrdersData = ({ orderedProducts, setOpenModalForDecision }) => {
  const [checked, setChecked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenModal = () => {
    if (!checked) {
      setOpenSnackbar(true);
    }
    else {
      setOpenModalForDecision(true);
    }
  };

  return (
    <Grid item xs={12} md={5}>
      <Typography variant="h6" align="center" gutterBottom>
        Product&nbsp;
        {orderedProducts.reduce((acc, { count }) => acc + count, 0)}&nbsp;
        pieces
      </Typography>
      <StyledBasketTotal>
        <Typography variant="h6">Total</Typography>
        <Typography>
          {orderedProducts.reduce((acc, { count, product: { price } }) => acc + count * price, 0)}
          $
        </Typography>
      </StyledBasketTotal>
      <StyledBasketBuyButton
        sx={{ color: "white" }}
        variant="contained"
        onClick={handleOpenModal}
        fullWidth
      >
        Buy Now
      </StyledBasketBuyButton>
      <CheckboxToAcceptTheTerms
        checked={checked}
        setChecked={setChecked}
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </Grid>
  );
}

export default OrdersData;
