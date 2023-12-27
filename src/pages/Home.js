import React, { useContext } from "react";
import axios from "axios";

import AppContext from "../Context";

import Сategories from "../components/Сategories/index";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/Pizza-block";

function Home() {
  const { valueSeacrh, visibleItems, setItemsPizza, setValueSeacrh } =
    useContext(AppContext);

  //Loading items per page
  const [loadingItems, setLoadingItems] = React.useState(true);

  //Categories
  const [valueSort, setValueSort] = React.useState(0);
  const [valueFilter, setValueFilter] = React.useState(0);
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
    getItems(urlParametrSort, urlParametrFilter, setItemsPizza);
  }, [urlParametrSort, urlParametrFilter, setItemsPizza]);

  async function getItems(urlParametr1, urlParamet2, setItemsPizza) {
    try {
      setLoadingItems(true);
      const { data } = await axios.get(
        `https://65776583197926adf62e373f.mockapi.io/Items?${urlParametr1}&${urlParamet2}`
      );
      setItemsPizza(data);
      setLoadingItems(false);
    } catch (error) {
      alert("Что-то пошло не так");
      console.error("Ошибка запроса данных");
    }
    window.scrollTo(0, 0);
  }

  // Sort
  React.useEffect(() => {
    setCurrentPage(1);
    valueSort === 0 && setUrlParametrSort("sortBy=rating&order=desc");
    valueSort === 1 && setUrlParametrSort("sortBy=price&order=desc");
    valueSort === 2 && setUrlParametrSort("sortBy=title&order=asc");
  }, [valueSort]);

  // Filter
  React.useEffect(() => {
    if (valueSeacrh !== "") {
      setValueFilter(0);
    }
    if (valueFilter === 0) {
      setUrlParametrFilter(``);
    } else setUrlParametrFilter(`category=${valueFilter}`);
  }, [valueFilter, valueSeacrh]);

  //Pagination
  React.useEffect(() => {
    setCurrentPage(1);
  }, [valueFilter]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [valueSeacrh]);

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
          setValueFilter,
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
