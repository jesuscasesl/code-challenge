import {
  LIST_ARTICLES_LOAD,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR
} from './../action/types';
import initialState from './../initialState';

export default function listArticlesReducer (state = initialState.listArticles, action) {
  switch (action.type) {
    case LIST_ARTICLES_LOAD:
      return {
        ...state,
        error:   null,
        loading: true
      };

    case LIST_ARTICLES_SUCCESS:
    return {
      ...state,
      articles: action.payload,
      error:    null,
      loading:  false
    };

    case LIST_ARTICLES_ERROR:
      return {
        ...state,
        articles: [],
        error:    action.payload,
        loading:  false
      };

    default:
      return state;
  }
}
