import React from 'react';
import classes from './Button.module.css';

const Button = ({
  type = 'button',
  appearance = 'secondary',
  label,
  onClick,
  disabled,
  className,
}) => (
  <button
    className={[classes.button, classes[appearance], className].join(' ')}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
