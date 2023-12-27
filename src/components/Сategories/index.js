import React from "react";
import AppContext from "../../Context";

function Сategories() {
  const {
    valueSort,
    setValueSort,
    valueFilter,
    setValueFilter,
    setValueSeacrh,
  } = React.useContext(AppContext);

  const [stateDropDown, setStateDropDown] = React.useState(false);

  const categoriesSort = ["популярности", "цене", "алфавиту"];
  const categoriesFilter = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <div className="filter">
        {categoriesFilter.map((elem, index) => (
          <button
            key={index}
            onClick={() => {
              setValueFilter(index);
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
              <span className="dropdown-select">
                {categoriesSort[valueSort]}
              </span>
            </div>
          </button>
          {stateDropDown && (
            <ul className="dropdown-menu">
              {categoriesSort.map((item, index) => (
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
