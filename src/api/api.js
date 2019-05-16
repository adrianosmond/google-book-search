import axios from 'axios';
import { API_BASE_URL } from 'constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const fetchBooks = (query, maxResults, startIndex) =>
  axios.get(`${API_BASE_URL}/volumes`, {
    params: {
      q: query,
      maxResults,
      startIndex,
    },
  });
