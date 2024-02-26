"use client";

import { useState } from "react";
import Modal from "./Modal";
import OrdersData from "./OrdersData";

const OrdersDataAndModal = ({ orderedProducts }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <OrdersData
        orderedProducts={orderedProducts}
        handleOpenModal={handleOpenModal}
      />
      <Modal
        open={openModal}
        handleClose={handleCloseModal}
        handelCloseAgree={handleCloseModal}
      />
    </>
  );
}

export default OrdersDataAndModal;
