"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBasketItems } from "@/store/basketItems/allReducer";
import getProducts from "@/services/getProducts";

const useBasketItems = () => {
  const dispatch = useDispatch();
  const allBasketElems = useSelector(
    (state) => state.allBasketItems.allBasketItems
  );
  const selectBasketElems = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );

  useEffect(() => {
    getProducts().then((data) => dispatch(allBasketItems(data)));
  }, []);

  return { allBasketElems, selectBasketElems };
}

export default useBasketItems;
