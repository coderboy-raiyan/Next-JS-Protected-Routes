import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";

const store = configureStore({
  reducer: {
    user: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
