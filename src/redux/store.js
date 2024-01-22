import { configureStore } from "@reduxjs/toolkit";
import filterAndSort from "./slices/filterAndSort";
import urlParameters from "./slices/urlParameters";
import cart from "./slices/cart";
import pizzaSlice from "./slices/pizzaSlice";
import visibleItems from "./slices/visibleItems";
import pagination from "../redux/slices/pagination";

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
