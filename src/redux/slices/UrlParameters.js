import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urlParameterSort: "rating",
  orderSort: "desc",
  urlParameterFilter: "",
};

export const urlParameters = createSlice({
  name: "urlParameters",
  initialState,
  reducers: {
    setUrlParameterSort(state, action) {
      state.urlParameterSort = action.payload;
    },
    setOrderSort(state, action) {
      state.orderSort = action.payload;
    },
    setUrlParameterFilter(state, action) {
      state.urlParameterFilter = action.payload;
    },
  },
});

export const { setUrlParameterSort, setOrderSort, setUrlParameterFilter } =
  urlParameters.actions;

export default urlParameters.reducer;
