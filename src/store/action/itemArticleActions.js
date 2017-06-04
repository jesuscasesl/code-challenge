import {
  ARTICLE_SELECTED_LOAD,
  ARTICLE_SELECTED_SUCESS,
  ARTICLE_SELECTED_ERROR
} from './types';

// Actions Creators
export function articleSelectedSuccess (item) {
  return {
    type:     ARTICLE_SELECTED_SUCESS,
    payload:  item
  };
};

export function articleSelectedError (err) {
  return {
    type:     ARTICLE_SELECTED_ERROR,
    payload:  err
  };
};

export const articleSelectedLoad = (id) => (dispatch, getState) => {
  dispatch(() => {
    return {
      type: ARTICLE_SELECTED_LOAD
    };
  });

  const state = getState();
  let getStateArticleSelected = new Promise((resolve, reject) => {
    let itemSelected = state.listArticles.articles.find(item => item.id === id);
    resolve(itemSelected);
  });

  getStateArticleSelected
    .then(function(val) {
      dispatch(articleSelectedSuccess(val));
    })
    .catch(function(err) {
      dispatch(articleSelectedError(err));
    });
};
