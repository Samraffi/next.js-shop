"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBasketItems } from "@/store/basketItems/allReducer";
import data from "../../data.json";

const useBasketItems = () => {
  const dispatch = useDispatch();
  const allBasketElems = useSelector(
    (state) => state.allBasketItems.allBasketItems
  );
  const selectBasketElems = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );

  useEffect(() => {
    dispatch(allBasketItems(data));
  }, []);

  return { allBasketElems, selectBasketElems };
}

export default useBasketItems;
