import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

type typesParametersFetch = Record<string, string>

type typesItemPizza = {
  id: string,
  imageUrl: string,
  title: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

export const fetchPizzas = createAsyncThunk<typesItemPizza[], typesParametersFetch>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { urlParameterSort, orderSort, urlParameterFilter } = params;
    const { data } = await axios.get(
      `https://65776583197926adf62e373f.mockapi.io/Items?sortBy=${urlParameterSort}&order=${orderSort}&category=${urlParameterFilter}`
    );
    return data as typesItemPizza[];
  }
);

interface pizzaSliceState {
  itemsPizzas: typesItemPizza[],
  status: string,
}

const initialState:pizzaSliceState = {
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
      state.itemsPizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.itemsPizzas = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.itemsPizzas = [];
    });
  },
});

export default pizzaSlice.reducer;
