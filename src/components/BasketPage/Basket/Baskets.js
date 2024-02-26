"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import updateCountOrderedProduct from "@/services/updateCountOrderedProduct";
import removeOrderedProduct from "@/services/removeOrderedProduct";
import DeleteModal from "./DeleteModal";
import Basket from "./Basket";

function Baskets({ orderedProducts, setOrderedProducts, }) {
  const [openModal, setOpenModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [idForDeleteOrderInBasket, setIdForDeleteOrderInBasket] = useState("");

  const changeCountOrderedProduct = (id, count) => {
    setDisabled(true);
    updateCountOrderedProduct(id, count)
      .then((data) => {
        let products = [
          ...orderedProducts.map((obj) => {
            if (obj.id === id) {
              return { ...obj, count };
            };

            return obj;
          })
        ];


        setDisabled(false);
        setOrderedProducts(products);
      })
      .catch((err) => console.log(err));
  };

  const warnAboutDeletion = (id) => {
    setOpenModal(true);
    setIdForDeleteOrderInBasket(id);
  }

  const cancelDeletion = () => {
    setOpenModal(false);
    setIdForDeleteOrderInBasket("");
  }

  const removeOrderFromCart = (id) => {
    removeOrderedProduct(id)
      .then((data) => {
        let products = [...orderedProducts.filter((obj) => obj.id !== id)];
        setOrderedProducts(products);
      })
      .then((data) => {
        setOpenModal(false);
        setIdForDeleteOrderInBasket("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid item xs={12} md={7}>
        {orderedProducts.map(({ id, buy, count, product: { images, title, price } }) => {
          return !buy && (
            <Basket
              disabled={disabled}
              changeCountOrderedProduct={changeCountOrderedProduct}
              warnAboutDeletion={warnAboutDeletion}
              id={id}
              count={count}
              images={images}
              title={title}
              price={price}
              key={id}
            />
          )
        })
        }
      </Grid>
      <DeleteModal
        open={openModal}
        cancelDeletion={cancelDeletion}
        removeOrder={() => removeOrderFromCart(idForDeleteOrderInBasket)}
      />
    </>
  );
}

export default Baskets;
