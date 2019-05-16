import { fetchBooks } from 'api/api';
import { fetchStatuses, actionTypes } from 'constants/constants';
import { bookTransformer } from 'data/book';

const INITIAL_STATE = {
  books: [],
  fetchStatus: fetchStatuses.IDLE,
};

const searchBooksStarted = query => ({
  type: actionTypes.SEARCH_BOOKS,
  payload: {
    query,
  },
});

const searchBooksJumpToPage = currentPage => ({
  type: actionTypes.JUMP_TO_PAGE,
  payload: {
    currentPage,
  },
});

const searchBooksSuccess = (books, totalResults) => ({
  type: actionTypes.SEARCH_BOOKS_SUCCESS,
  payload: {
    books,
    totalResults,
  },
});

const searchBooksFailure = err => ({
  type: actionTypes.SEARCH_BOOKS_FAILURE,
  payload: {
    err,
  },
});

const getBooks = (query, resultsPerPage, startIndex) => dispatch =>
  fetchBooks(query, resultsPerPage, startIndex)
    .then(response => {
      dispatch(
        searchBooksSuccess(response.data.items, response.data.totalItems),
      );
    })
    .catch(err => dispatch(searchBooksFailure(err)));

export const searchBooks = query => (dispatch, getState) => {
  const { resultsPerPage } = getState().search;
  dispatch(searchBooksStarted(query));
  dispatch(getBooks(query, resultsPerPage, 0));
};

export const fetchResultsPage = pageToFetch => (dispatch, getState) => {
  const { query, resultsPerPage } = getState().search;
  dispatch(searchBooksJumpToPage(pageToFetch));
  dispatch(getBooks(query, resultsPerPage, pageToFetch * resultsPerPage));
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BOOKS:
    case actionTypes.JUMP_TO_PAGE: {
      return {
        ...state,
        fetchStatus: fetchStatuses.FETCHING,
      };
    }

    case actionTypes.SEARCH_BOOKS_SUCCESS: {
      return {
        ...state,
        fetchStatus: fetchStatuses.RECEIVED,
        books: action.payload.books.map(bookTransformer),
      };
    }

    case actionTypes.SEARCH_BOOKS_FAILURE: {
      return {
        ...state,
        fetchStatus: fetchStatuses.FAILED,
      };
    }

    default:
      return state;
  }
};
