import {
  LIST_ARTICLES_LOAD,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR,
  DELETE_ARTICLES,
  NEW_ARTICLES
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

    case DELETE_ARTICLES:
      const index = state.articles.findIndex(item => item.id === action.payload.id);

      return {
        ...state,
        articles:[
          ...state.articles.slice(0, index),
          ...state.articles.slice(index + 1)
        ],
        error:    null,
        loading:  false
      };

      case NEW_ARTICLES:
      debugger;
        return {
          ...state,
          items: [...state.articles, action.payload],
          error:    null,
          loading:  false
        };

    default:
      return state;
  }
}
