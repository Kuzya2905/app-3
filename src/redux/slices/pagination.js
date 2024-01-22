import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerPage: 4,
  lastItemIndex: 0,
  firstItemIndex: 0,
  currentItems: [],
};

export const pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCurrentItems(state, action) {
      state.lastItemIndex = state.currentPage * state.itemsPerPage;
      state.firstItemIndex = state.lastItemIndex - state.itemsPerPage;

      state.currentItems = action.payload.slice(
        state.firstItemIndex,
        state.lastItemIndex
      );
    },
    setCurrentPageFromUrl(state, action) {
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const { setCurrentPage, setCurrentItems, setCurrentPageFromUrl } =
  pagination.actions;

export default pagination.reducer;
