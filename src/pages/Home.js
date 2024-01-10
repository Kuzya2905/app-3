import React, { useContext } from "react";
import axios from "axios";

import AppContext from "../Context";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setValueFilter } from "../redux/slices/filterSlice";

import Сategories from "../components/Сategories/index";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/Pizza-block";

function Home() {
  const dispatch = useDispatch();
  const { valueSeacrh, visibleItems, setItemsPizza, setValueSeacrh } =
    useContext(AppContext);

  //Loading items per page
  const [loadingItems, setLoadingItems] = React.useState(true);

  //Filter and sort
  const valueFilter = useSelector((state) => state.filter.valueFilter);
  console.log(valueFilter);
  const [valueSort, setValueSort] = React.useState(0);
  // const [valueFilter, setValueFilter] = React.useState(0);
  const [urlParametrSort, setUrlParametrSort] = React.useState(
    "sortBy=rating&order=desc"
  );
  const [urlParametrFilter, setUrlParametrFilter] = React.useState("");

  //Pagintaion
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(4);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = visibleItems.slice(firstItemIndex, lastItemIndex);

  //Get items from backend
  React.useEffect(() => {
    async function getItems() {
      try {
        setLoadingItems(true);
        const { data } = await axios.get(
          `https://65776583197926adf62e373f.mockapi.io/Items?${urlParametrSort}&${urlParametrFilter}`
        );
        setItemsPizza(data);
        setLoadingItems(false);
      } catch (error) {
        alert("Что-то пошло не так");
        console.error("Ошибка запроса данных");
      }
      window.scrollTo(0, 0);
    }
    getItems();
  }, [urlParametrSort, urlParametrFilter, setItemsPizza]);

  // Sort;
  React.useEffect(() => {
    const changeSort = () => {
      setCurrentPage(1);
      valueSort === 0 && setUrlParametrSort("sortBy=rating&order=desc");
      valueSort === 1 && setUrlParametrSort("sortBy=price&order=desc");
      valueSort === 2 && setUrlParametrSort("sortBy=title&order=asc");
    };
    changeSort();
  }, [valueSort]);

  // Filter
  React.useEffect(() => {
    const changeFilter = () => {
      if (valueSeacrh !== "") {
        dispatch(setValueFilter(0));
      }
      if (valueFilter === 0) {
        setUrlParametrFilter(``);
      } else setUrlParametrFilter(`category=${valueFilter}`);
    };
    changeFilter();
  }, [valueFilter, valueSeacrh, dispatch]);

  // Pagination
  React.useEffect(() => {
    setCurrentPage(1);
  }, [valueFilter, valueSeacrh]);
  //

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  //
  return (
    <main>
      <AppContext.Provider
        value={{
          valueSort,
          setValueSort,
          valueFilter,
          setValueSeacrh,
          visibleItems,
          loadingItems,
          paginate,
          itemsPerPage,
          currentPage,
          currentItems,
        }}
      >
        <Сategories />
        <section className="pizza">
          <h1>Все пиццы</h1>
          <PizzaBlock />
          <Pagination />
        </section>
      </AppContext.Provider>
    </main>
  );
}

export default Home;
