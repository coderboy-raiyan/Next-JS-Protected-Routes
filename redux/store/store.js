import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
