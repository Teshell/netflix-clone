import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
