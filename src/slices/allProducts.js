import { createSlice } from "@reduxjs/toolkit";
import products from "./../products/products";

const initialState = {
  loading: "true",
  allProducts: [],
};
const allProducts = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    getAllProducts: (state) => {
      state.allProducts = products;
    },

    loading: (state) => {
      state.loading = false;
    },
    //reduce availability with 1...
    decrimentOneProduct: (state, { payload }) => {
      state.allProducts[payload.id - 1].available =
        state.allProducts[payload.id - 1].available - 1;
    },
  },
});
export const {
  getAllProducts,
  loading,
  decrimentOneProduct,
} = allProducts.actions;
export default allProducts.reducer;
