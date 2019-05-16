import React from 'react';
import InvisibleList from 'components/InvisibleList';
import classes from './SpacedList.module.css';

const SpacedList = ({ Component, items, firstResultIdx }) => (
  <InvisibleList className={classes.list}>
    {items.map(({ id, ...otherProps }, idx) => (
      <InvisibleList.Item key={id} className={classes.item}>
        <Component {...otherProps} idx={idx + firstResultIdx} />
      </InvisibleList.Item>
    ))}
  </InvisibleList>
);

export default SpacedList;
