import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,

  addToCart: (state, action) => {
    state.cart = [...state.cart, action.payload];
  },
});

export const { addToCart } = cartReducer.actions;
export default cartReducer.reducer;
