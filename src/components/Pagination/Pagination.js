import React from "react";
import AppContext from "../../Context";

export default function Pagination() {
  const { paginate, visibleItems, itemsPerPage, currentPage } =
    React.useContext(AppContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(visibleItems.length / itemsPerPage); i++) {
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
