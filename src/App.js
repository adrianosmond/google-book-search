import React from 'react';
import BookSearchForm from 'containers/BookSearch/BookSearchForm';
import BookSearchResults from 'containers/BookSearch/BookSearchResults';
import BookSearchPagination from 'containers/BookSearch/BookSearchPagination';
import BookSearchHistory from 'containers/BookSearch/BookSearchHistory';
import Page from 'components/Page';
import MainAndAside from 'components/MainAndAside';

function App() {
  return (
    <Page>
      <BookSearchForm />
      <MainAndAside
        main={
          <>
            <BookSearchResults />
            <BookSearchPagination />
          </>
        }
        aside={<BookSearchHistory />}
      />
    </Page>
  );
}

export default App;
