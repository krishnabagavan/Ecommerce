import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartslice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
