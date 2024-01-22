import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/pagination";
import { setCurrentItems } from "../../redux/slices/pagination";

export default function Pagination() {
  const { items } = useSelector((state) => state.visibleItems);
  const { valueFilter } = useSelector((state) => state.filterAndSort);
  const { valueSearch } = useSelector((state) => state.visibleItems);
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(
    (state) => state.pagination
  );

  React.useEffect(() => {
    dispatch(setCurrentItems(items));
  }, [items, currentPage, dispatch]);

  function paginate(pageNumber) {
    dispatch(setCurrentPage(pageNumber));
  }

  React.useEffect(() => {
    if (items.length <= 4 && items.length > 0) {
      dispatch(setCurrentPage(1));
    }
  }, [valueFilter, valueSearch, items, dispatch]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={number === currentPage ? "selected" : ""}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
