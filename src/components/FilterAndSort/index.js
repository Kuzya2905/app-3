import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setValueFilter,
  setValueSort,
  setDropMenu,
  setDropMenuToReverse,
} from "../../redux/slices/filterAndSort";
import { setValueSearch } from "../../redux/slices/visibleItems";

function FilterAndSort() {
  const { valueFilter, valueSort } = useSelector(
    (state) => state.filterAndSort
  );
  const { dropMenu } = useSelector((state) => state.filterAndSort);
  const dispatch = useDispatch();

  const sort = ["популярности", "цене", "алфавиту"];
  const filter = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const sortRef = React.useRef();

  React.useEffect(() => {
    const clickOutside = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
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
            onClick={(e) => {
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
}
export default FilterAndSort;
