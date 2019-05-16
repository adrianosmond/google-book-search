import React from 'react';
import InvisibleList from 'components/InvisibleList';
import LinkButton from 'components/LinkButton';
import classes from './RecentSearches.module.css';

const RecentSearches = ({ history, redoSearch }) => (
  <div className={classes.wrapper}>
    <h2 className={classes.title}>Recent searches</h2>
    <InvisibleList>
      {history.map(search => (
        <InvisibleList.Item className={classes.link}>
          <LinkButton
            onClick={() => redoSearch(search)}
            label={
              <>
                <span className="hidden">Search for </span>
                {search}
              </>
            }
          />
        </InvisibleList.Item>
      ))}
      {history.length === 0 && (
        <InvisibleList.Item className={classes.link}>
          No recent searches
        </InvisibleList.Item>
      )}
    </InvisibleList>
  </div>
);
export default RecentSearches;
