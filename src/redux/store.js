import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categories";
import pagination from "./slices/pagination";

export const store = configureStore({
  reducer: {
    categories,
    pagination,
  },
});
