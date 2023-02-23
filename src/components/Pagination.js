import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [activeNumber, setActiveNumber] = useState(1);
  const pageNumbers = [];
  const MaxPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= MaxPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setActiveNumber(number);
    return paginate(number);
  };

  return (
    <nav>
      <ul className="flex justify-evenly mt-5">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              activeNumber === number ? "bg-red-600 border-2 text-white" : ""
            }
          >
            <a href="#!" onClick={() => handleClick(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
