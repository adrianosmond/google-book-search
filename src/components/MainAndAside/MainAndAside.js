import React from 'react';
import classes from './MainAndAside.module.css';

const MainAndAside = ({ main, aside }) => (
  <article className={classes.wrapper}>
    <main className={classes.main}>{main}</main>
    <aside className={classes.aside}>{aside}</aside>
  </article>
);

export default MainAndAside;
