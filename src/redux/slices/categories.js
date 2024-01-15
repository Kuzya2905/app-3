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
    setCategories(state, action) {
      state.valueFilter = Number(action.payload.urlParametrFilter);
      
      state.currentPage = Number(action.payload.currentPage);

      if (action.payload.urlParametrSort === "rating") {
        state.valueSort = 0;
      }
      if (action.payload.urlParametrSort === "price") {
        state.valueSort = 1;
      }
      if (action.payload.urlParametrSort === "title") {
        state.valueSort = 2;
      }
    },
  },
});

export const { setValueFilter, setValueSort, setCurrentPage, setCategories } =
  categories.actions;

export default categories.reducer;
