import {
  LOAD_ARTICLES_INIT,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE
} from '../Actions/types';
import initalState from './initialState';

export default function articleListReducer (state = initalState.articleList, action) {
  switch (action.type) {
    case LOAD_ARTICLES_INIT:
      return {
        ...state,
        error: null,
        loading: true
      }

    case LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null,
        loading: false
      };

    case LOAD_ARTICLES_FAILURE:
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
