import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from 'state/reducers/booksReducer';
import { fetchStatuses } from 'constants/constants';
import Input from 'components/Input';
import Button from 'components/Button';
import SearchForm from 'components/SearchForm';

class SearchFormContainer extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fetchBooks, isSearching } = this.props;
    const { query } = this.state;

    if (query.length > 0 && !isSearching) {
      fetchBooks(query);
      this.setState({ query: '' });
    }
  };

  handleInput = e => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { isSearching } = this.props;
    const { query } = this.state;
    return (
      <SearchForm
        onSubmit={this.handleSubmit}
        title="Google Books Search"
        field={
          <Input
            label="Which books would you like to see?"
            placeholder="e.g. CSS"
            value={query}
            onChange={this.handleInput}
          />
        }
        button={
          <Button
            type="submit"
            appearance="primary"
            label="Search"
            disabled={query.length === 0 || isSearching}
          />
        }
      />
    );
  }
}

const mapStateToProps = ({ books }) => ({
  isSearching: books.fetchStatus === fetchStatuses.FETCHING,
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: query => dispatch(searchBooks(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormContainer);
