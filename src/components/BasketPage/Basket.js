"use client";

import { useEffect, useState } from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import {
  StyledBasket,
  StyledBasketTotal,
  StyledBasketBuyButton,
  StyledBasketProductItem,
  StyledQuantityContainer,
  StyledProductName,
  StyledQuantityButtons,
  StyledDeleteContainer,
  StyledDeleteButton,
} from "./Basket.style";
import DeleteIcon from "@mui/icons-material/Delete";

import Modal from "./Modal";
import getOrderedProducts from "@/services/getOrderedProducts";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";

function Basket() {
  const [openModal, setOpenModal] = useState(false);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const { authUser } = useAuthUserAndSignOut();
  let uid = authUser?.uid;

  useEffect(() => {
    getOrderedProducts(uid)
      .then((data) => {
        setOrderedProducts(data);
      })
      .catch((err) => console.log(err));
  }, [uid]);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handelCloseAgreeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <StyledBasket>
        <Typography variant="h4" align="center" gutterBottom>
          Basket
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            {orderedProducts.map(({ id, buy, count, product: { images, title, price } }) => {
              if (buy) {
                return false;
              }

              return (
                <StyledBasketProductItem key={id} container spacing={2}>
                  <Grid item xs={3} md={3}>
                    <img
                      src={images[0]}
                      alt="Image"
                      width="100%"
                      style={{ borderRadius: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={5} md={4}>
                    <StyledProductName variant="h6">{title}</StyledProductName>
                    <Typography>${price}</Typography>
                  </Grid>
                  <StyledQuantityContainer item xs={4} md={5} container>
                    {/* <StyledQuantityButtons
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        minusItem(item);
                      }}
                    >
                      -
                    </StyledQuantityButtons> */}
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize="1.2rem"
                      marginRight="8px"
                    >
                      {count}
                    </Typography>
                    {/* <StyledQuantityButtons
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        onClickAdd(item);
                      }}
                    >
                      +
                    </StyledQuantityButtons> */}
                    <StyledDeleteContainer item xs={3} container>
                      {/* <StyledDeleteButton
                        onClick={() => {
                          deleteItem(item);
                        }}
                      >
                        <DeleteIcon />
                      </StyledDeleteButton> */}
                    </StyledDeleteContainer>
                  </StyledQuantityContainer>
                </StyledBasketProductItem>
              )
            })
            }
          </Grid>

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
              onClick={handleClickOpenModal}
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
        </Grid>
      </StyledBasket>
      <Modal
        product={orderedProducts}
        open={openModal}
        handleClose={handleCloseModal}
        handelCloseAgree={handelCloseAgreeModal}
      />
    </>
  );
}

export default Basket;
