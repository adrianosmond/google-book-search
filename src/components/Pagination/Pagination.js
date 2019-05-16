import React from 'react';
import IconButton from 'components/IconButton';
import ResultsSummary from 'components/ResultsSummary';
import classes from './Pagination.module.css';

const Pagination = ({
  firstResult,
  lastResult,
  totalResults,
  currentPage,
  isViewingFirstPage,
  isViewingLastPage,
  prevPage,
  nextPage,
}) => (
  <div className={classes.wrapper} id="pagination">
    <ResultsSummary
      firstResult={firstResult}
      lastResult={lastResult}
      totalResults={totalResults}
    />
    <div className={classes.buttons}>
      <span className="hidden">You are viewing page</span>
      <span className={classes.current}>{currentPage}</span>
      <IconButton
        icon="prev"
        label="Go to previous page"
        onClick={prevPage}
        disabled={isViewingFirstPage}
        className={classes.prevButton}
      />
      <IconButton
        icon="next"
        label="Go to next page"
        onClick={nextPage}
        disabled={isViewingLastPage}
      />
    </div>
  </div>
);

export default Pagination;
