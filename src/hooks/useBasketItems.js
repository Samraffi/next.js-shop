"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBasketItems } from "@/store/basketItems/allReducer";

const useBasketItems = () => {
  const dispatch = useDispatch();
  const allBasketElems = useSelector(
    (state) => state.allBasketItems.allBasketItems
  );
  const selectBasketElems = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(allBasketItems(data));
      });
  }, []);

  return { allBasketElems, selectBasketElems };
}

export default useBasketItems;
