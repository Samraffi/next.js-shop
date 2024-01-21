"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const StoreProvider = ({ children }) => {
  const store = makeStore();
  const persistor = persistStore(store);

  return typeof window !== "undefined"
    ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
      )
    : (
    <Provider store={store}>
      <PersistGate persistor={store}>
        {children}
      </PersistGate>
    </Provider>
      );
};

export default StoreProvider;
