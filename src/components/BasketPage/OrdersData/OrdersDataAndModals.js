"use client";

import { useState } from "react";
import OrdersData from "./OrdersData";
import ModalForDecisionMaking from "./ModalForDecisionMaking";
import AgreeModal from "./AgreeModal";

const OrdersDataAndModals = ({ orderedProducts }) => {
  const [openModalForDecision, setOpenModalForDecision] = useState(false);
  const [openAgreeModal, setOpenAgreeModal] = useState(false);

  return (
    <>
      <OrdersData
        orderedProducts={orderedProducts}
        setOpenModalForDecision={setOpenModalForDecision}
      />
      <ModalForDecisionMaking
        openModalForDecision={openModalForDecision}
        setOpenModalForDecision={setOpenModalForDecision}
        setOpenAgreeModal={setOpenAgreeModal}
      />
      <AgreeModal
        orderedProducts={orderedProducts}
        openAgreeModal={openAgreeModal}
        setOpenAgreeModal={setOpenAgreeModal}
      />
    </>
  );
}

export default OrdersDataAndModals;
