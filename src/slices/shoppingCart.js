import { ControlPointSharp } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedProducts: [
    {
      count: 0,
      id: 1,
      available: 5,
      imageUrl: "https://i.ibb.co/TBnD0cD/404687-removebg-preview.png",
      name: "Nvidia GT-42354Rs",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
      price: 250,
    },
  ],
};

const isThereSameItem = (item, list) => {};

const shoppingCartSlicer = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let sameProduct = false;

      state.addedProducts.map((item) => {
        if (item.id === payload.id) {
          sameProduct = true;
          item.count += 1;
          item.available -= 1;
          return 0;
        }
      });
      if (!sameProduct) {
        const product = { ...payload };
        product.count += 1;
        product.available -= 1;
        state.addedProducts = [...state.addedProducts, product];
      }
    },
    removeFromCart: (state, { payload }) => {
      const res = state.addedProducts.filter((item) => item.id !== payload.id);
      state.addedProducts = res;
    },
  },
});
export default shoppingCartSlicer.reducer;
export const { addToCart, removeFromCart } = shoppingCartSlicer.actions;
