import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../products/products";
const initialState = {
  product: {},
};

const currentProduct = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {
    getCurrentProduct: (state, { payload }) => {
      state.product = getProduct(payload);
    }, //reduce availability with 1...
    decrimentOneAvai: (state, { payload }) => {
      state.product.available = state.product.available - 1;
    },
  },
});
export const { getCurrentProduct, decrimentOneAvai } = currentProduct.actions;
export default currentProduct.reducer;
