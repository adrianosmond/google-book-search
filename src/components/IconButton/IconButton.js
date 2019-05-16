import React from 'react';
import Button from 'components/Button';
import icons from 'assets/images/icons';
import classes from './IconButton.module.css';

const IconButton = ({ icon, label, onClick, disabled, className }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    className={[classes.button, className].join(' ')}
    label={<img src={icons[icon]} alt={label} />}
  />
);

export default IconButton;
