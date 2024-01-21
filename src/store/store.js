import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import counterReducer from "./counter/counterSlice";
import allReducer from "./basketItems/allReducer";
import selectReducer from "./basketItems/selectReducer";

export const makeStore = () => {
  const persistConfig = {
    key: "root",
    version: 1,
    storage
  };

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
      counter: counterReducer,
      allBasketItems: allReducer,
      selectBasketItems: selectReducer
    })
  );

  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });
};
