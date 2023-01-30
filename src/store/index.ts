import { configureStore } from "@reduxjs/toolkit";
import cart from "./Cart.store";

const store = configureStore({
  reducer: {
    cart: cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
