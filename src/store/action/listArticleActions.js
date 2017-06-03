import {
  LOAD_LIST_ARTICLES_INIT,
  LOAD_LIST_ARTICLES_SUCCESS,
  LOAD_LIST_ARTICLES_FAILURE,
  ARTICLE_SELECTED,
  LOAD_ITEM_ARTICLES_SUCCESS
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


export function articleSelectedSuccess (item) {
  return {
    type: LOAD_ITEM_ARTICLES_SUCCESS,
    payload: item
  };
}

export const loadListArticlesInit = () => (dispatch, getState) => {
  const state = getState();
  if(state.listArticles.articles.length < 2){
    try {
      request(ARTICLES_QUERY).then(response => {
        //console.log(response.data.articles.find(item => item.id === "592950aae2b2d90f1d114c93"));
        dispatch(loadListArticlesSuccess(response.data.articles));
      });
    }
    catch (error) {
      //dispatch(loadListArticlesFailure(error));
      console.log(error);
    }
  }
  else{
    console.log("No se Realiza la llamada")
  }
}

export const articleSelected = (id) => (dispatch, getState) => {
  console.log(id)
  const state = getState();

  let artItem =  state.listArticles.articles.find(item => item.id === id);
  dispatch(articleSelectedSuccess(artItem));

}
