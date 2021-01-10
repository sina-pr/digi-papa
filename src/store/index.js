import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "../slices/theme";
import allProducts from "../slices/allProducts";
import shoppingCart from "../slices/shoppingCart";
import badgeNumber from "./../slices/badgeNumber";
const reducer = combineReducers({
  theme,
  allProducts,
  shoppingCart,
  badgeNumber,
});

const store = configureStore({
  reducer,
});

export default store;
