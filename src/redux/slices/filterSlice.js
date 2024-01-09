import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueFilter: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setValueFilter(state, action) {
      state.valueFilter = action.payload;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;

export default filterSlice.reducer;
