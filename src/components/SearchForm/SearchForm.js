import React from 'react';
import classes from './SearchForm.module.css';

const SearchForm = ({ onSubmit, title, field, button }) => (
  <form id="search-form" onSubmit={onSubmit} className={classes.form}>
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.field}>{field}</div>
      <div className={classes.button}>{button}</div>
    </div>
  </form>
);

export default SearchForm;
