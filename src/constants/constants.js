export const API_BASE_URL = 'https://www.googleapis.com/books/v1';

export const actionTypes = {
  SEARCH_BOOKS: 'SEARCH_BOOKS',
  SEARCH_BOOKS_SUCCESS: 'SEARCH_BOOKS_SUCCESS',
  SEARCH_BOOKS_FAILURE: 'SEARCH_BOOKS_FAILURE',
  JUMP_TO_PAGE: 'JUMP_TO_PAGE',
};

export const fetchStatuses = {
  IDLE: 'IDLE',
  FETCHING: 'FETCHING',
  RECEIVED: 'RECEIVED',
  FAILED: 'FAILED',
};
