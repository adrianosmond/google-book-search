import React from 'react';
import classes from './ResultsSummary.module.css';

const ResultsSummary = ({ firstResult, lastResult, totalResults, query }) => (
  <p className={classes.wrapper}>
    Showing results <strong>{firstResult}</strong> to{' '}
    <strong>{lastResult}</strong> of <strong>{totalResults}</strong>
    {query && (
      <>
        {' for '}
        <strong>{query}</strong>
      </>
    )}
  </p>
);

export default ResultsSummary;
