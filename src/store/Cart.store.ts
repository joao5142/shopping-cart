import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

import IProduct from "@/types/Product";
import { WritableDraft } from "immer/dist/internal";

interface ICartState {
  products: IProduct[];
  itemCount: number;
  totalPrice: number;
}

const initialState: ICartState = {
  products: [],
  itemCount: 0,
  totalPrice: 0,
};

const setTotalPrice = (state: WritableDraft<ICartState>) => {
  state.totalPrice = state.products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0.0);
};

const cart = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProductToCart(state, action: PayloadAction<IProduct>) {
      let product = state.products.find((p) => p.id === action.payload.id);

      if (!product) {
        state.products.push({ ...action.payload, quantity: 1 });
        state.itemCount += 1;
      }
      setTotalPrice(state);
    },

    increaseCountProductInCart(state, action: PayloadAction<number>) {
      let product = state.products.find((product) => product.id === action.payload);

      if (product) {
        product.quantity++;
      }
      console.log(current(state));
      setTotalPrice(state);
    },

    decreaseCountProductInCart(state, action: PayloadAction<number>) {
      let product = state.products.find((product) => product.id === action.payload);

      if (product && product.quantity > 1) {
        product.quantity--;
      }
      console.log(current(state));
      setTotalPrice(state);
    },

    removeProductInCart(state, action: PayloadAction<number>) {
      let indexProductInProductsArray = state.products.findIndex((product) => product.id === action.payload);

      state.products.splice(indexProductInProductsArray, 1);
      setTotalPrice(state);
      if (state.itemCount > 0) {
        state.itemCount -= 1;
      }
    },
  },
});

export const { addProductToCart, increaseCountProductInCart, decreaseCountProductInCart, removeProductInCart } =
  cart.actions;
export default cart.reducer;
