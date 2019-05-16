import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResultsPage } from 'state/reducers/booksReducer';
import Pagination from 'components/Pagination';
import { fetchStatuses } from 'constants/constants';

class BookSearchQuery extends Component {
  prevPage = () => {
    const { goToPage, currentPage } = this.props;
    goToPage(currentPage - 1);
  };

  nextPage = () => {
    const { goToPage, currentPage } = this.props;
    goToPage(currentPage + 1);
  };

  render() {
    const {
      totalResults,
      firstResult,
      lastResult,
      currentPage,
      totalPages,
      isLoading,
    } = this.props;

    if (totalResults < 0 || isLoading) return null;

    return (
      <Pagination
        firstResult={firstResult}
        lastResult={lastResult}
        totalResults={totalResults}
        currentPage={currentPage}
        isViewingFirstPage={currentPage <= 0}
        isViewingLastPage={currentPage + 1 >= totalPages}
        prevPage={this.prevPage}
        nextPage={this.nextPage}
      />
    );
  }
}

const mapStateToProps = ({ search, books }) => ({
  isLoading: books.fetchStatus === fetchStatuses.FETCHING,
  currentPage: search.currentPage,
  totalPages: search.totalPages,
  firstResult: search.firstResult,
  lastResult: search.lastResult,
  totalResults: search.totalResults,
});

const mapDispatchToProps = dispatch => ({
  goToPage: pageNum => dispatch(fetchResultsPage(pageNum)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSearchQuery);
