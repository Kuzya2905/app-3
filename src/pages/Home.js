import React, { useContext } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import AppContext from "../Context";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setValueFilter } from "../redux/slices/categories";
import { setCurrentPage } from "../redux/slices/pagination";

import Сategories from "../components/Сategories/index";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/Pizza-block";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { valueSearch, visibleItems, setItemsPizza, setValueSearch } =
    useContext(AppContext);

  //Loading items per page
  const [loadingItems, setLoadingItems] = React.useState(true);

  //Filter and sort
  const { valueFilter, valueSort } = useSelector((state) => state.categories);
  const [urlParametrSort, setUrlParametrSort] = React.useState("rating");
  const [orderSort, setOrderSort] = React.useState("desc");

  const [urlParametrFilter, setUrlParametrFilter] = React.useState("");

  //Pagintaion
  const currentPage = useSelector((state) => state.pagination.currentPage);
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
          `https://65776583197926adf62e373f.mockapi.io/Items?sortBy=${urlParametrSort}&order=${orderSort}&category=${urlParametrFilter}`
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
  }, [urlParametrSort, urlParametrFilter, orderSort, setItemsPizza]);

  // Sort;
  React.useEffect(() => {
    const changeSort = () => {
      dispatch(setCurrentPage(1));
      if (valueSort === 0) {
        setUrlParametrSort("rating");
        setOrderSort("desc");
      }
      if (valueSort === 1) {
        setUrlParametrSort("price");
        setOrderSort("desc");
      }
      if (valueSort === 2) {
        setUrlParametrSort("title");
        setOrderSort("asc");
      }
    };
    changeSort();
  }, [valueSort, dispatch]);

  // Filter
  React.useEffect(() => {
    const changeFilter = () => {
      if (valueSearch !== "") {
        dispatch(setValueFilter(0));
      }
      if (valueFilter === 0) {
        setUrlParametrFilter(``);
      } else setUrlParametrFilter(valueFilter);
    };
    changeFilter();
  }, [valueFilter, valueSearch, dispatch]);

  // Pagination
  React.useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [valueFilter, valueSearch, dispatch]);
  //

  function paginate(pageNumber) {
    dispatch(setCurrentPage(pageNumber));
  }
  //

  React.useEffect(() => {
    const nameLink = qs.stringify({
      urlParametrSort,
      urlParametrFilter,
      currentPage,
    });
    navigate(`?${nameLink}`);
  }, [urlParametrSort, urlParametrFilter, currentPage, navigate]);
  return (
    <main>
      <AppContext.Provider
        value={{
          valueSort,
          valueFilter,
          setValueSearch,
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
