"use client";

import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { StyledBasketTotal, StyledBasketBuyButton } from "../Basket/Basket.style";

const OrdersData = ({ orderedProducts, handleOpenModal }) => {
  return (
    <Grid item xs={12} md={5}>
      <Typography variant="h6" align="center" gutterBottom>
        Product{" "}
        {orderedProducts.reduce((acc, { count }) => acc + count, 0)}{" "}
        pieces
      </Typography>
      <StyledBasketTotal>
        <Typography variant="h6">Total</Typography>
        <Typography>
          {orderedProducts
            .reduce((acc, { count, product: { price } }) => acc + count * price, 0)
            .toLocaleString()}{" "}
          $
        </Typography>
      </StyledBasketTotal>
      <StyledBasketBuyButton
        sx={{
          color: "white",
        }}
        variant="contained"
        onClick={handleOpenModal}
        fullWidth
      >
        Buy Now
      </StyledBasketBuyButton>
      <Box mt={2} textAlign="center">
        <Typography>
          {" "}
          <Checkbox name="convention" value="checked" /> I agree with the
          rules for using the trading platform and returning
        </Typography>
      </Box>
    </Grid>
  );
}

export default OrdersData;
