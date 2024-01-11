import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueFilter: 0,
  valueSort: 0,
  currentPage: 1,
};

export const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setValueFilter(state, action) {
      state.valueFilter = action.payload;
    },
    setValueSort(state, action) {
      state.valueSort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setValueFilter, setValueSort, setCurrentPage } =
  categories.actions;

export default categories.reducer;
