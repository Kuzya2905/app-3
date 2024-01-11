import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

export const pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = pagination.actions;

export default pagination.reducer;
