import React from "react";
import AppContext from "../../Context";

import { useDispatch } from "react-redux";
import { setValueFilter } from "../../redux/slices/filterSlice";

function Сategories() {
  const dispatch = useDispatch();

  const { valueSort, setValueSort, valueFilter, setValueSeacrh } =
    React.useContext(AppContext);

  const [stateDropDown, setStateDropDown] = React.useState(false);

  const sort = ["популярности", "цене", "алфавиту"];
  const filter = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="filter-sort">
      <div className="filter">
        {filter.map((elem, index) => (
          <button
            key={index}
            onClick={() => {
              dispatch(setValueFilter(index));
              setValueSeacrh("");
            }}
            className={valueFilter === index ? "active" : ""}
          >
            {elem}
          </button>
        ))}
      </div>
      <div className="sort">
        <div className="dropdown">
          <button
            className="btn"
            onClick={(e) => {
              setStateDropDown((prev) => !prev);
            }}
          >
            {!stateDropDown ? (
              <img className="img-open" src="/images/sort/vector.svg" alt="" />
            ) : (
              <img className="img-close" src="/images/sort/vector.svg" alt="" />
            )}
            <div className="text">
              <span>Сортировка по:&nbsp;</span>
              <span className="dropdown-select">{sort[valueSort]}</span>
            </div>
          </button>
          {stateDropDown && (
            <ul className="dropdown-menu">
              {sort.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setValueSort(index);
                    setStateDropDown((prev) => !prev);
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
export default Сategories;
