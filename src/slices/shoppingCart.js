import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedProducts: [
    {
      id: 2,
      available: 5,
      imageUrl: "https://i.ibb.co/2yMDLDW/4470586-removebg-preview-1.png",
      name: "ROGO11G-GAMING",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
      price: 830,
    },
  ],
};

const shoppingCartSlicer = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.addedProducts = [...state.addedProducts, payload];
    },
  },
});
export default shoppingCartSlicer.reducer;
export const { addToCart } = shoppingCartSlicer.actions;
