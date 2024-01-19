import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/Categories";
import urlParameters from "./slices/UrlParameters";
import cart from "./slices/Cart";
import pizzaSlice from "./slices/PizzaSlice";

export const store = configureStore({
  reducer: {
    categories,
    urlParameters,
    cart,
    pizzaSlice,
  },
});
