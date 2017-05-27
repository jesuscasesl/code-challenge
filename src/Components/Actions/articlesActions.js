import {
  LOAD_ARTICLES_INIT,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE
} from './types';
import request from '../Request';
import { ARTICLES_QUERY } from '../Queries';

// Actions Creators
function loadArticlesSuccess (article) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    payload: articles
  };
}

function loadArticlesFailure (err) {
  return {
    type: LOAD_ARTICLES_FAILURE,
    payload: err
  };
}

// Actions Creators (Async)
export function loadArticles () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: LOAD_ARTICLES_INIT
      };
    })

    try {
      componentWillMount() {
        request(ARTICLES_QUERY).then(response => {
          dispatch(loadArticlesSuccess(response.data.articles));
        });
      }
    } catch (error) {
      dispatch(loadArticlesFailure(error));
    }
  }
}
