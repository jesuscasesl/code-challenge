import {
  LOAD_LIST_ARTICLES_INIT,
  LOAD_LIST_ARTICLES_SUCCESS,
  LOAD_LIST_ARTICLES_FAILURE
} from './types';
import request from '../Request';
import { ARTICLES_QUERY } from '../Queries';

// Actions Creators
export function loadListArticlesSuccess (articles) {
  return {
    type: LOAD_LIST_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function loadListArticlesFailure (err) {
  return {
    type: LOAD_LIST_ARTICLES_FAILURE,
    payload: err
  };
}

// Actions Creators (Async)
export function loadListArticlesInit () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: LOAD_LIST_ARTICLES_INIT
      };
    })

    try {
      request(ARTICLES_QUERY).then(response => {
        dispatch(loadListArticlesSuccess(response.data.articles));
      });
    } catch (error) {
      dispatch(loadListArticlesFailure(error));
    }
  }
}
