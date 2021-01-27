import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "../slices/theme";
import allProducts from "../slices/allProducts";
import shoppingCart from "../slices/shoppingCart";
import badgeNumber from "./../slices/badgeNumber";
import currentProduct from "../slices/currentProduct";
const reducer = combineReducers({
  theme,
  allProducts,
  currentProduct,
  shoppingCart,
  badgeNumber,
});

const store = configureStore({
  reducer,
});

export default store;
