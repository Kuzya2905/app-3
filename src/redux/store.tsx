import { configureStore } from "@reduxjs/toolkit";
import filterAndSort from "./slices/filterAndSort.tsx";
import urlParameters from "./slices/urlParameters.tsx";
import cart from "./slices/cart.tsx";
import pizzaSlice from "./slices/pizzaSlice.tsx";
import visibleItems from "./slices/visibleItems.tsx";
import pagination from "./slices/pagination.tsx";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filterAndSort,
    urlParameters,
    cart,
    pizzaSlice,
    visibleItems,
    pagination,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
