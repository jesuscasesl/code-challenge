import {
  LOAD_ARTICLE_INIT,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE
} from './types';
import request from '../Request';
import { ARTICLES_QUERY } from '../Queries';

// Actions Creators
// LOAD
function loadArticleSuccess (article) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    payload: article
  };
}

function loadArticleFailure (err) {
  return {
    type: LOAD_ARTICLE_FAILURE,
    payload: err
  };
}

// Actions Creators (Async)
export function loadArticle () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: LOAD_ARTICLE_INIT
      };
    })

    try {
      componentWillMount() {
        request(ARTICLES_QUERY).then(response => {
          dispatch(loadArticleSuccess(response.data.articles));
        });
      }
    } catch (error) {
      dispatch(loadArticleFailure(error));
    }
  }
}
