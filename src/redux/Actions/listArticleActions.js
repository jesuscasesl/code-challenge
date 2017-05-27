import {
  LOAD_LIST_ARTICLES_INIT,
  LOAD_LIST_ARTICLES_SUCCESS,
  LOAD_LIST_ARTICLES_FAILURE
} from './types';
import request from '../../api/Request';
import { ARTICLES_QUERY } from '../../api/Queries';

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

export function loadListArticlesInit (aaa) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: LOAD_LIST_ARTICLES_INIT
      };
    })

    try {
      request(ARTICLES_QUERY).then(response => {
        //console.log(response.data.articles.find(item => item.id === "592950aae2b2d90f1d114c93"));
        dispatch(loadListArticlesSuccess(response.data.articles));
      });
    } catch (error) {
      dispatch(loadListArticlesFailure(error));
    }
  }
}
