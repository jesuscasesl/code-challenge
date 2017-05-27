import {
  LOAD_ARTICLE_INIT,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE
} from '../Actions/types';
import initialState from './initialState';

export default function articleActiveReducer (state = initialState.articleActive, action) {
  switch (action.type) {
    case LOAD_ARTICLE_INIT:
      return {
        ...state,
        error: null,
        loading: true
      };

    case LOAD_ARTICLE_SUCCESS:
    return {
      ...state,
      product: action.payload,
      error: null,
      loading: false
    };

    case LOAD_ARTICLE_FAILURE:
      return {
        ...state,
        product: [],
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
