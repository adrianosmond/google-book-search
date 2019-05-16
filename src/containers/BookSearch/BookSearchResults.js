import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStatuses } from 'constants/constants';
import SearchMessage from 'components/SearchMessage';
import SpacedList from 'components/SpacedList';
import ResultsSummary from 'components/ResultsSummary';
import BookPreview from 'components/BookPreview';

class BookSearchResults extends Component {
  renderContent = () => {
    const {
      books,
      isSearching,
      hasError,
      hasSearched,
      firstResult,
      lastResult,
      totalResults,
      query,
    } = this.props;
    if (isSearching) {
      return <SearchMessage>Loading...</SearchMessage>;
    }
    if (hasError) {
      return <SearchMessage>Something went wrong...</SearchMessage>;
    }
    if (!hasSearched) {
      return <SearchMessage>Please search for something...</SearchMessage>;
    }
    if (books.length === 0) {
      return <SearchMessage>No books found</SearchMessage>;
    }
    return (
      <>
        <ResultsSummary
          query={query}
          firstResult={firstResult}
          lastResult={lastResult}
          totalResults={totalResults}
        />
        <SpacedList
          items={books}
          firstResultIdx={firstResult}
          Component={BookPreview}
        />
      </>
    );
  };

  render() {
    return (
      <div aria-live="polite" aria-controls="search-form pagination">
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ books, search }) => ({
  books: books.books,
  isSearching: books.fetchStatus === fetchStatuses.FETCHING,
  hasError: books.fetchStatus === fetchStatuses.FAILED,
  hasSearched: books.fetchStatus !== fetchStatuses.IDLE,
  query: search.query,
  firstResult: search.firstResult,
  lastResult: search.lastResult,
  totalResults: search.totalResults,
});

export default connect(mapStateToProps)(BookSearchResults);
