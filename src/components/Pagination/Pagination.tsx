import React from "react";
import { useSelector} from "react-redux";
import { setCurrentPage, setCurrentItems } from "../../redux/slices/pagination.tsx";
import { RootState, useAppDispatch } from "../../redux/store.tsx";

const Pagination: React.FC = () => {
  const { items } = useSelector((state:RootState) => state.visibleItems);
  const { valueFilter } = useSelector((state:RootState) => state.filterAndSort);
  const { valueSearch } = useSelector((state:RootState) => state.visibleItems);
  const dispatch = useAppDispatch();
  const { currentPage, itemsPerPage } = useSelector(
    (state:RootState) => state.pagination
  );

  React.useEffect(() => {
    dispatch(setCurrentItems(items));
  }, [items, currentPage, dispatch]);

  function paginate(pageNumber:number) {
    dispatch(setCurrentPage(pageNumber));
  }

  React.useEffect(() => {
    if (items.length <= 4 && items.length > 0) {
      dispatch(setCurrentPage(1));
    }
  }, [valueFilter, valueSearch, items, dispatch]);

  const pageNumbers:number[] = [];

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
};

export default Pagination;
