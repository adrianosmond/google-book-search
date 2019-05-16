import React from 'react';
import classes from './SearchMessage.module.css';

const SearchMessage = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default SearchMessage;
