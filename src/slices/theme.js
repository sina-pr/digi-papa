import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  darkTheme: false,
};

const theme = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
export const { changeTheme } = theme.actions;
export default theme.reducer;
