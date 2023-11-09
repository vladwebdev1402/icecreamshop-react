import React, { useState } from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./Pagination.module.scss";

const pagination = [1, 2, 3, 4, 5, 6, 7, 8];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage !== pagination.at(-1)) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <BoundingContainer className={st.pagination}>
      <button
        onClick={prevPage}
        className={`${st.btn} ${st.btn_left} ${
          currentPage === 1 ? st.btn_disabled : ""
        }`}
      ></button>
      <ul className={st.pages}>
        {pagination.map((page) => (
          <li className={st.page__item} key={page}>
            <button
              className={`${st.page__number} ${
                page === currentPage ? st.page__number_active : ""
              }`}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={nextPage}
        className={`${st.btn} ${st.btn_right} ${
          currentPage === pagination.at(-1) ? st.btn_disabled : ""
        }`}
      ></button>
    </BoundingContainer>
  );
};

export default Pagination;
