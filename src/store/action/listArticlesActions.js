import {
  LIST_ARTICLES_LOAD,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR
} from './types';
import request from '../../api/Request';
import { ARTICLES_QUERY } from '../../api/Queries';

// Actions Creators
export function listArticleSucess (articles) {
  return {
    type:     LIST_ARTICLES_SUCCESS,
    payload:  articles
  };
}

export function listArticleError (err) {
  return {
    type:     LIST_ARTICLES_ERROR,
    payload:  err
  };
}

export const loadArticleLoad = () => (dispatch, getState) => {
  dispatch(() => {
    return {
      type: LIST_ARTICLES_LOAD
    };
  })

  const state = getState();
  if(state.listArticles.articles.length === 0){
    let getStateArticles = new Promise((resolve, reject) => {
      let listArticlesApi = request(ARTICLES_QUERY);
      resolve(listArticlesApi);
    });

    getStateArticles
      .then(function(val) {
        dispatch(listArticleSucess(val.data.articles));
      })
      .catch(function(err) {
        debugger;
        dispatch(listArticleError(err));
      });
  }
}
