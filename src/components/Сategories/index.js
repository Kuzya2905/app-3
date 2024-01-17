import React from "react";
import { AppContext } from "../../Context";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setValueFilter, setValueSort } from "../../redux/slices/Categories";

function Сategories() {
  const { valueFilter, valueSort } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const { setValueSearch, stateDropDown, setStateDropDown } =
    React.useContext(AppContext);

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
        setStateDropDown(false);
      }
    };
    document.body.addEventListener("click", clickOutside);
    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, [setStateDropDown]);

  return (
    <div className="filter-sort">
      <div className="filter">
        {filter.map((elem, index) => (
          <button
            key={index}
            onClick={() => {
              dispatch(setValueFilter(index));
              setValueSearch("");
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
                    dispatch(setValueSort(index));
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
