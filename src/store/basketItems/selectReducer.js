import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  server: "",
  client: "",
  selectBasketItems: []
};

const selectBasketItemsSlice = createSlice({
  name: "selectBasketItems",
  initialState,
  reducers: {
    selectBasketItems (state, { payload }) {
      state.selectBasketItems = payload;
    }
  }
});

const { actions, reducer } = selectBasketItemsSlice;
export const { selectBasketItems } = actions;
export default reducer;
