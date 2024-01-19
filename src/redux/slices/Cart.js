import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  itemsCart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findIdenticalItem = state.itemsCart.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizes === action.payload.sizes &&
          item.types === action.payload.types
      );
      if (findIdenticalItem) {
        findIdenticalItem.count++;
      } else {
        state.itemsCart.push({ ...action.payload, count: 1 });
      }
    },
    setTotalPrice(state) {
      state.totalPrice = state.itemsCart.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    setTotalCount(state) {
      state.totalCount = state.itemsCart.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
    deleteItem(state, action) {
      state.itemsCart = state.itemsCart.filter(
        (item, index) => index !== action.payload
      );
    },
    clearCart(state) {
      state.itemsCart = [];
    },
    minusCount(state, action) {
      const findItem = state.itemsCart.find(
        (item, index) => index === action.payload
      );
      if (findItem.count > 1) {
        findItem.count--;
      } else
        state.itemsCart = state.itemsCart.filter(
          (item, index) => index !== action.payload
        );
    },
    plusCount(state, action) {
      const findItem = state.itemsCart.find(
        (item, index) => index === action.payload
      );
      findItem.count++;
    },
  },
});

export const {
  addItem,
  setTotalPrice,
  setTotalCount,
  deleteItem,
  clearCart,
  minusCount,
  plusCount,
} = cart.actions;

export default cart.reducer;
