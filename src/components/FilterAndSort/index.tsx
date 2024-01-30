import React from "react";

import { useSelector } from "react-redux";
import {
  setValueFilter,
  setValueSort,
  setDropMenu,
  setDropMenuToReverse,
} from "../../redux/slices/filterAndSort.tsx";
import { setValueSearch } from "../../redux/slices/visibleItems.tsx";

import {RootState, useAppDispatch} from '../../redux/store.tsx'

const FilterAndSort:React.FC = React.memo(()=> {
  const { valueFilter, valueSort } = useSelector(
    (state:RootState) => state.filterAndSort
  );
  const { dropMenu } = useSelector((state:RootState) => state.filterAndSort);
  const dispatch = useAppDispatch();

  const sort = ["популярности", "цене", "алфавиту"];
  const filter = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые", 
  ];

  const sortRef = React.useRef(null);

  React.useEffect(() => {
    const clickOutside = (e:MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
          dispatch(setDropMenu(false));
      }
    };
    document.body.addEventListener("click", clickOutside);
    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, [dispatch]);

  return (
    <div className="filter-sort">
      <div className="filter">
        {filter.map((elem, index) => (
          <button
            key={index}
            onClick={() => {
              dispatch(setValueFilter(index));
              dispatch(setValueSearch(""));
            }}
            className={valueFilter === index ? "active" : ""}
          >
            {elem}
          </button>
        ))}
      </div>
      <div className="sort" ref={sortRef}>
        <div className="dropdown">
          <button
            className="btn"
            onClick={() => {
              dispatch(setDropMenuToReverse());
            }}
          >
            {!dropMenu ? (
              <img className="img-open" src="/images/sort/vector.svg" alt="" />
            ) : (
              <img className="img-close" src="/images/sort/vector.svg" alt="" />
            )}
            <div className="text">
              <span>Сортировка по:&nbsp;</span>
              <span className="dropdown-select">{sort[valueSort]}</span>
            </div>
          </button>
          {dropMenu && (
            <ul className="dropdown-menu">
              {sort.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    dispatch(setValueSort(index));
                    dispatch(setDropMenuToReverse());
                  }}
                  className="dropdown-item"
                >
                  {item}
                </button>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
})
export default FilterAndSort;
