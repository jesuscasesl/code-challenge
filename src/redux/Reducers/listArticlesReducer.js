import {
  LOAD_LIST_ARTICLES_INIT,
  LOAD_LIST_ARTICLES_SUCCESS,
  LOAD_LIST_ARTICLES_FAILURE
} from '../Actions/types';
import initialState from './initialState';

export default function listArticlesReducer (state = initialState.listArticles, action) {
  switch (action.type) {
    case LOAD_LIST_ARTICLES_INIT:
      return {
        ...state,
        error: null,
        loading: true
      };

    case LOAD_LIST_ARTICLES_SUCCESS:
    return {
      ...state,
      articles: action.payload,
      error: null,
      loading: false
    };

    case LOAD_LIST_ARTICLES_FAILURE:
      return {
        ...state,
        articles: [],
        error: action.payload,
        loading: false
      };


    default:
      return state;
  }
}
