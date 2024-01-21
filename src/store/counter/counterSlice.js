import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  server: "",
  client: "",
  counter: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter (state, { payload }) {
      state.counter = payload + 1;
    },
    decrementCounter (state, { payload }) {
      state.counter = payload - 1;
    }
  }
});

const { actions, reducer } = counterSlice;
export const { incrementCounter, decrementCounter } = actions;
export default reducer;
