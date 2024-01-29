import React from "react";
import { useSelector } from "react-redux";
import { findItems, setValueSearch } from "../../redux/slices/visibleItems.tsx";
import { RootState, useAppDispatch } from "../../redux/store.tsx";

const Search: React.FC = () => {
  const { itemsPizzas } = useSelector((state:RootState) => state.pizzaSlice);
  const { valueSearch } = useSelector((state:RootState) => state.visibleItems);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(findItems(itemsPizzas));
  }, [itemsPizzas, valueSearch, dispatch]);

  return (
    <div className="search-panel">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title />
        <path
          d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z"
          fill="#464646"
        />
      </svg>
      <input
        className="search"
        placeholder="Поиск пиццы..."
        onChange={(event) => dispatch(setValueSearch(event.target.value))}
        value={valueSearch}
        type="search"
      />
    </div>
  );
};

export default Search;
