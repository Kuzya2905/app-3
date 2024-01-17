import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log(state.items);
      const findIdenticalItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findIdenticalItem) {
        findIdenticalItem.count++;
      } else {
        console.log(findIdenticalItem);
        state.items.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { addItem } = cart.actions;

export default cart.reducer;
