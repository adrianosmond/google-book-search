import { actionTypes } from 'constants/constants';

const INITIAL_STATE = {
  history: [],
  query: '',
  resultsPerPage: 20,
  currentPage: -1,
  totalResults: -1,
  totalPages: 0,
  firstResult: 0,
  lastResult: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BOOKS: {
      const query = action.payload.query.trim();
      return {
        ...state,
        query,
        currentPage: 0,
        totalResults: -1,
        history: [
          query,
          ...state.history.filter(h => h.toLowerCase() !== query.toLowerCase()),
        ],
      };
    }

    case actionTypes.SEARCH_BOOKS_SUCCESS: {
      const { totalResults } = action.payload;
      const { currentPage, resultsPerPage } = state;
      return {
        ...state,
        totalResults,
        totalPages: Math.ceil(totalResults / resultsPerPage),
        firstResult: currentPage * resultsPerPage + 1,
        lastResult: Math.min((currentPage + 1) * resultsPerPage, totalResults),
      };
    }

    case actionTypes.SEARCH_BOOKS_FAILURE: {
      return {
        ...state,
        currentPage: -1,
        totalResults: -1,
        totalPages: 0,
        firstResult: 0,
        lastResult: 0,
      };
    }

    case actionTypes.JUMP_TO_PAGE: {
      const { currentPage } = action.payload;
      const { totalResults, resultsPerPage } = state;
      return {
        ...state,
        currentPage: action.payload.currentPage,
        firstResult: currentPage * resultsPerPage + 1,
        lastResult: Math.min((currentPage + 1) * resultsPerPage, totalResults),
      };
    }

    default:
      return state;
  }
};
