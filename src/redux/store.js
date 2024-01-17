import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/Categories";
import urlParameters from "./slices/UrlParameters";
import cart from "./slices/Cart";

export const store = configureStore({
  reducer: {
    categories,
    urlParameters,
    cart,
  },
});
