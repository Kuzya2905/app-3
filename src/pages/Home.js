import React, { useContext, useState } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { AppContext, AppHomeContext } from "../Context";

import { useSelector, useDispatch } from "react-redux";
import {
  setValueFilter,
  setCurrentPage,
  setCategories,
} from "../redux/slices/Categories";
import {
  setUrlParameterSort,
  setOrderSort,
  setUrlParameterFilter,
} from "../redux/slices/UrlParameters";

import Сategories from "../components/Сategories/index";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/Pizza-block";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLocationSearch, setIsLocationSearch] = useState(false);

  const { valueSearch, visibleItems, setItemsPizza, setValueSearch } =
    useContext(AppContext);

  //Loading items per page
  const [loadingItems, setLoadingItems] = React.useState(true);

  //Filter and sort
  const { valueFilter, valueSort } = useSelector((state) => state.categories);

  const { urlParameterSort, orderSort, urlParameterFilter } = useSelector(
    (state) => state.urlParameters
  );

  //Pagintaion
  const currentPage = useSelector((state) => state.categories.currentPage);
  const [itemsPerPage] = React.useState(4);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = visibleItems.slice(firstItemIndex, lastItemIndex);

  React.useEffect(() => {
    if (isLocationSearch) {
      const nameLink = qs.stringify({
        urlParameterSort,
        urlParameterFilter,
        currentPage,
      });
      navigate(`?${nameLink}`);
    }
  }, [
    urlParameterSort,
    urlParameterFilter,
    currentPage,
    isLocationSearch,
    navigate,
  ]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.slice(1));
      dispatch(setCategories(params));
    }
    setIsLocationSearch(true);
  }, [dispatch]);

  //Get items from backend
  React.useEffect(() => {
    async function getItems() {
      try {
        setLoadingItems(true);
        const { data } = await axios.get(
          `https://65776583197926adf62e373f.mockapi.io/Items?sortBy=${urlParameterSort}&order=${orderSort}&category=${urlParameterFilter}`
        );
        setItemsPizza(data);
        setLoadingItems(false);
      } catch (error) {
        alert("Что-то пошло не так");
        console.error("Ошибка запроса данных");
      }
      window.scrollTo(0, 0);
    }
    if (isLocationSearch) {
      getItems();
    }
  }, [
    urlParameterSort,
    urlParameterFilter,
    orderSort,
    setItemsPizza,
    isLocationSearch,
    dispatch,
  ]);

  // Pagination
  function paginate(pageNumber) {
    dispatch(setCurrentPage(pageNumber));
  }

  React.useEffect(() => {
    if (visibleItems.length <= 4 && visibleItems.length > 0) {
      dispatch(setCurrentPage(1));
    }
  }, [valueFilter, valueSearch, visibleItems, dispatch]);

  // Sort;
  React.useEffect(() => {
    const changeSort = () => {
      if (valueSort === 0) {
        dispatch(setUrlParameterSort("rating"));
        dispatch(setOrderSort("desc"));
      }
      if (valueSort === 1) {
        dispatch(setUrlParameterSort("price"));
        dispatch(setOrderSort("desc"));
      }
      if (valueSort === 2) {
        dispatch(setUrlParameterSort("title"));
        dispatch(setOrderSort("asc"));
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
        dispatch(setUrlParameterFilter(""));
      } else dispatch(setUrlParameterFilter(valueFilter));
    };
    changeFilter();
  }, [valueFilter, valueSearch, dispatch]);

  return (
    <main>
      <AppHomeContext.Provider
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
      </AppHomeContext.Provider>
    </main>
  );
}

export default Home;
