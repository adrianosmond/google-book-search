import React from 'react';
import classes from './Input.module.css';

const Input = ({ type = 'text', label, placeholder, value, onChange }) => (
  <label className={classes.wrapper}>
    <span className={classes.label}>{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes.input}
    />
  </label>
);

export default Input;
