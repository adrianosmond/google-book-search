import React from 'react';
import classes from './LinkButton.module.css';

const LinkButton = ({ label, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    {label}
  </button>
);

export default LinkButton;
