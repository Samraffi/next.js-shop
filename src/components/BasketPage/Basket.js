"use client";

import { Box, Checkbox, Grid, Typography } from "@mui/material";
import {
  StyledBasket,
  StyledBasketTotal,
  StyledBasketBuyButton,
  StyledBasketProductItem,
  StyledQuantityContainer,
  StyledProductName,
  StyledQuantityButtons,
  StyledDeleteIcon,
  StyledDeleteContainer,
  StyledDeleteButton,
} from "./Basket.style";
import DeleteIcon from "@mui/icons-material/Delete";
import changeCountBasketItems from "@/services/changeCountBasketItems";
import { useSelector, useDispatch } from "react-redux";
import useBasketItems from "@/hooks/useBasketItems";
import getUpdatedBasketItems from "@/helpers/getUpdatedBasketItems";
import { selectBasketItems } from "@/store/basketItems/selectReducer";
import deleteBasketItem from "@/helpers/deleteBasketItem";
import minusUptadeBasketItem from "@/helpers/minusUptadeBasketItem";

import Modal from "../OrderPage/Modal";

function Basket() {
  const selectBasketItemsAll = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );
  const dispatch = useDispatch();
  const { selectBasketElems } = useBasketItems();

  const onClickAdd = (product) => {
    const updatedBasketItems = getUpdatedBasketItems(
      selectBasketElems,
      product
    );
    dispatch(selectBasketItems(updatedBasketItems));
  };

  const deleteItem = (product) => {
    const updatedBasketItems = deleteBasketItem(selectBasketElems, product);
    dispatch(selectBasketItems(updatedBasketItems));
  };

  const minusItem = (product) => {
    const updatedBasketItems = minusUptadeBasketItem(
      selectBasketElems,
      product
    );
    dispatch(selectBasketItems(updatedBasketItems));
  };


  return (
    <StyledBasket>
      <Typography variant="h4" align="center" gutterBottom>
        Basket
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          {selectBasketItemsAll.map((item, index) => (
            <StyledBasketProductItem key={index} container spacing={2}>
              <Grid item xs={3} md={3}>
                <img
                  src={item.images[0]}
                  alt="Image"
                  width="100%"
                  style={{ borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={5} md={4}>
                <StyledProductName variant="h6">{item.title}</StyledProductName>
                <Typography>${item.price}</Typography>
              </Grid>
              <StyledQuantityContainer item xs={4} md={5} container>
                <StyledQuantityButtons
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    minusItem(item);
                  }}
                >
                  -
                </StyledQuantityButtons>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  fontSize="1.2rem"
                  marginRight="8px"
                >
                  {item.quantity}
                </Typography>
                <StyledQuantityButtons
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    onClickAdd(item);
                  }}
                >
                  +
                </StyledQuantityButtons>
                <StyledDeleteContainer item xs={3} container>
                  <StyledDeleteButton
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    <DeleteIcon />
                  </StyledDeleteButton>
                </StyledDeleteContainer>
              </StyledQuantityContainer>
            </StyledBasketProductItem>
          ))}
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography variant="h6" align="center" gutterBottom>
            Product{" "}
            {selectBasketItemsAll.reduce((acc, item) => acc + item.quantity, 0)}{" "}
            pieces
          </Typography>
          <StyledBasketTotal>
            <Typography variant="h6">Total</Typography>
            <Typography>
              {selectBasketItemsAll
                .reduce((acc, item) => acc + item.quantity * item.price, 0)
                .toLocaleString()}{" "}
              $
            </Typography>
          </StyledBasketTotal>
          <StyledBasketBuyButton
            variant="contained"
            fullWidth
          >
            <Modal />
          </StyledBasketBuyButton>
          <Box mt={2} textAlign="center">
            <Typography>
              {" "}
              <Checkbox name="convention" value="checked" /> I agree with the
              rules for using the trading platform and returning
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </StyledBasket>
  );
}

export default Basket;
