import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from 'state/reducers/booksReducer';
import RecentSearches from 'components/RecentSearches';

class BookSearchHistory extends Component {
  render() {
    const { history, redoSearch } = this.props;
    return <RecentSearches history={history} redoSearch={redoSearch} />;
  }
}

const mapStateToProps = ({ search }) => ({
  history: search.history,
});

const mapDispatchToProps = dispatch => ({
  redoSearch: query => dispatch(searchBooks(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSearchHistory);
