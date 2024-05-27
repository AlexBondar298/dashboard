import React from "react";

export const Pagination = ({ tableLengthPage, totalTableLength, paginate, currentPage, handlePageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTableLength / tableLengthPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul className="pagination__inner">
        <li onClick={() => handlePageChange("backUp")}>
          <a href="#" class="page-link">
            &lt;
          </a>
        </li>
        {pageNumbers.slice(currentPage - 1, currentPage + 3).map((elem) => (
          <li key={elem} onClick={() => paginate(elem)}>
            <a href="#"> {elem}</a>
          </li>
        ))}
        <a href="#" class="page-link">
          {tableLengthPage > 5 && <span className="dots">...</span>}
        </a>

        {tableLengthPage > 5 &&
          pageNumbers.slice(-1).map((elem) => (
            <li key={elem} onClick={() => paginate(elem)}>
              <a href="#"> {elem}</a>
            </li>
          ))}
        <li onClick={() => handlePageChange("moveOn")}>
          <a href="#" class="page-link">
            &gt;
          </a>
        </li>
      </ul>
    </div>
  );
};
