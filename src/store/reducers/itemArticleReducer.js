import {
  ARTICLE_SELECTED_LOAD,
  ARTICLE_SELECTED_SUCESS,
  ARTICLE_SELECTED_ERROR
} from './../action/types';
import initialState from './../initialState';

export default function itemArticleReducer (state = initialState.itemArticle, action) {
  switch (action.type) {
    case ARTICLE_SELECTED_LOAD:
      return {
        ...state,
        error:    null,
        loading:  true
      };

    case ARTICLE_SELECTED_SUCESS:
    return {
      ...state,
      article:  action.payload,
      error:    null,
      loading:  false
    };

    case ARTICLE_SELECTED_ERROR:
      return {
        ...state,
        article:  [],
        error:    action.payload,
        loading:  false
      };

    default:
      return state;
  }
}
