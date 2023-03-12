import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numberOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;

/**
 * This much of code will take care about:
 * Action type contants
 * Action and Action Creators
 * Switch Statement in reducers
 * Handling mutable state in reducer
 *
 */
