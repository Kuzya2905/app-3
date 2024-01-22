import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  valueSearch: "",
};

export const visibleItems = createSlice({
  name: "visibleItems",
  initialState,
  reducers: {
    findItems(state, action) {
      state.items = action.payload.filter(
        (elem) =>
          elem.title.toUpperCase().indexOf(state.valueSearch.toUpperCase()) !==
          -1
      );
    },
    setValueSearch(state, action) {
      state.valueSearch = action.payload;
    },
  },
});

export const { findItems, setValueSearch } = visibleItems.actions;

export default visibleItems.reducer;
