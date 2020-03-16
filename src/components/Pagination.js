import React from 'react';
import Pagination from "react-js-pagination";

const PageComponent = ({ activePage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (    
    <Pagination
      activePage={activePage}
      itemsCountPerPage={2}
      totalItemsCount={pageNumbers.length}
      pageRangeDisplayed={5}
      onChange={paginate}
      itemClass="page-item"
      linkClass="page-link"
    />
  );

};

export default PageComponent;
