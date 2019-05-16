import React from 'react';
import classes from './BookPreview.module.css';

const BookPreview = ({
  title,
  authors,
  thumbnail,
  publisher,
  publishedDate,
  pageCount,
  link,
  idx,
}) => (
  <article className={classes.wrapper}>
    <h2 className="hidden">
      Result {idx}: {title}
    </h2>
    <div className={classes.thumb}>
      <img src={thumbnail} alt="" />
    </div>
    <div className={classes.text}>
      <dl>
        <dt className="hidden">Title</dt>
        <dd className={classes.title}>{title}</dd>
        <dt className="hidden">Authors</dt>
        <dd className={classes.authors}>
          {authors.length > 0 ? (
            authors.map(author => (
              <span key={author} className={classes.author}>
                {author}
              </span>
            ))
          ) : (
            <span className={classes.author}>Unknown author</span>
          )}
        </dd>
        <dt className="hidden">Publication information</dt>
        <dd className={classes.information}>
          {publisher}
          {publishedDate && `, ${publishedDate}`}
          {pageCount && ` - ${pageCount} pages`}
        </dd>
      </dl>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className={classes.link}
      >
        View <span className="hidden">{title}</span> on Google books
      </a>
    </div>
  </article>
);

export default BookPreview;
