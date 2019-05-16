import React from 'react';
import classes from './InvisibleList.module.css';

const InvisibleList = ({ children, className, ...props }) => (
  <ul className={[classes.list, className].join(' ')} {...props}>
    {children}
  </ul>
);

InvisibleList.Item = ({ children, className, ...props }) => (
  <li className={[classes.item, className].join(' ')} {...props}>
    {children}
  </li>
);

export default InvisibleList;
