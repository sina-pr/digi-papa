import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const badgeNumberSlicer = createSlice({
  name: "badgeNumber",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decriment: (state) => {
      if (state.count > 0) {
        state.count = state.count - 1;
      }
    },
  },
});
export default badgeNumberSlicer.reducer;
export const { increment, decriment } = badgeNumberSlicer.actions;
