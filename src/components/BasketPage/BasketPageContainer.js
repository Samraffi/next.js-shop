"use client";

import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { StyledBasket } from "./Basket/Basket.style";

import Modal from "./OrdersData/Modal";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";
import getOrderedProducts from "@/services/getOrderedProducts";
import OrdersData from "./OrdersData/OrdersData";
import Baskets from "./Basket/Baskets";

function BasketPageContainer() {
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
          <Baskets
            orderedProducts={orderedProducts}
            setOrderedProducts={setOrderedProducts}
          />
          <OrdersData
            orderedProducts={orderedProducts}
            // handleOpenModal={handleOpenModal}
          />
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

export default BasketPageContainer;
