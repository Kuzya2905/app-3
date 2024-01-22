import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { urlParameterSort, orderSort, urlParameterFilter } = params;
    const { data } = await axios.get(
      `https://65776583197926adf62e373f.mockapi.io/Items?sortBy=${urlParameterSort}&order=${orderSort}&category=${urlParameterFilter}`
    );
    return data;
  }
);

const initialState = {
  itemsPizzas: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.itemsPizzas = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export default pizzaSlice.reducer;
