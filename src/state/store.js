import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer,
});

// eslint-disable-next-line no-underscore-dangle
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  enhancedCompose(applyMiddleware(thunk)),
);
