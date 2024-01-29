import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueFilter: 0,
  valueSort: 0,
  dropMenu: false,
};

export const filterAndSort = createSlice({
  name: "filterAndSort",
  initialState,
  reducers: {
    setValueFilter(state, action) {
      state.valueFilter = action.payload;
    },
    setValueSort(state, action) {
      state.valueSort = action.payload;
    },

    setFilterAndSortByUrl(state, action) {
      state.valueFilter = Number(action.payload.urlParameterFilter);

      if (action.payload.urlParameterSort === "rating") {
        state.valueSort = 0;
      }
      if (action.payload.urlParameterSort === "price") {
        state.valueSort = 1;
      }
      if (action.payload.urlParameterSort === "title") {
        state.valueSort = 2;
      }
    },
    setDropMenu(state, action) {
      state.dropMenu = action.payload;
    },
    setDropMenuToReverse(state) {
      state.dropMenu = !state.dropMenu;
    },
  },
});

export const {
  setValueFilter,
  setValueSort,
  setFilterAndSortByUrl,
  setDropMenu,
  setDropMenuToReverse,
} = filterAndSort.actions;

export default filterAndSort.reducer;
