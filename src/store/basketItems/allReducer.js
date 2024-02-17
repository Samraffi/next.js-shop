import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  server: "",
  client: "",
  allBasketItems: []
};

const allBasketItemsSlice = createSlice({
  name: "allBasketItems",
  initialState,
  reducers: {
    allBasketItems (state, { payload }) {
      state.allBasketItems = payload;//state.allBaskets.push(payload)
    }
  }
});

const { actions, reducer } = allBasketItemsSlice;
export const { allBasketItems } = actions;
export default reducer;
