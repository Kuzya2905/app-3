import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/Categories";
import urlParameters from "./slices/UrlParameters";

export const store = configureStore({
  reducer: {
    categories,
    urlParameters,
  },
});
