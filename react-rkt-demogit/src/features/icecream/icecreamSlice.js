import { createSlice } from "@reduxjs/toolkit";

import { ordered as CakeOrdered } from "../cake/cakeSlice";
const initialState = {
  numberOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIcecreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(CakeOrdered, (state) => {
      state.numberOfIcecreams--;
    });
  },
});
export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
