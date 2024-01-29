import { createSlice } from "@reduxjs/toolkit";

type typesItem = {
  category:number, 
  id:string, 
  imageUrl:string, 
  price:number, 
  rating:number, 
  sizes:[], 
  title:"Пепперони Фреш с перцем", 
  types:[]
}

const initialState = {
  items: [],
  valueSearch: "",
};

export const visibleItems = createSlice({
  name: "visibleItems",
  initialState,
  reducers: {
    findItems(state, action) {
      state.items = action.payload.filter(
        (elem:typesItem) =>{
          return elem.title.toUpperCase().includes(state.valueSearch.toUpperCase())
        }
      );
    },
    setValueSearch(state, action) {
      state.valueSearch = action.payload;
    },
  },
});

export const { findItems, setValueSearch } = visibleItems.actions;

export default visibleItems.reducer;
