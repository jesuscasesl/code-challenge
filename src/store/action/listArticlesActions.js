import {
  LIST_ARTICLES_LOAD,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR,
  DELETE_ARTICLES,
  NEW_ARTICLES
} from './types';
import request from '../../api/Request';
import { ARTICLES_QUERY, ARTICLE_DELETE_QUERY, ARTICLE_ADD_QUERY } from '../../api/Queries';


import {withRouter} from "react-router-dom";

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

export function deleteArticleSucess (deleteItem) {
  return {
    type:     DELETE_ARTICLES,
    payload:  deleteItem
  };
}

export function newArticleSucess (newItem) {
  return {
    type:     NEW_ARTICLES,
    payload:  newItem
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
        dispatch(listArticleError(err));
      });
  }
  else{
    dispatch(listArticleSucess(state.listArticles.articles));
  }
}

export const deleteArticles = (id) => (dispatch, getState) => {

    let delArticle = new Promise((resolve, reject) => {
      let delArticleApi = request(ARTICLE_DELETE_QUERY(id));
      resolve(delArticleApi);
    });

    delArticle
      .then(function(val) {
        dispatch(deleteArticleSucess(val.data.DeleteArticle));
      })
      .catch(function(err) {
        console.log("WOooo Error");
      });
}

export const newArticles = (article) => (dispatch, getState) => {
    debugger;
    let newArticle = new Promise((resolve, reject) => {
      let newArticleApi = request(
        ARTICLE_ADD_QUERY(
          article.author,
          article.title,
          article.content,
          article.excerpt,
          article.published,
          article.tags
        )
      );
      resolve(newArticleApi);
    });

    newArticle
      .then(function(val) {
        dispatch(newArticleSucess(val.data.AddArticle));
      })
      .catch(function(err) {
        console.log("WOooo Error");
      });
}
