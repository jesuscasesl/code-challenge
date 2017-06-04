import { combineReducers } from 'redux';

import listArticles from './listArticlesReducer';
import itemArticle from './itemArticleReducer';

const rootReducer = combineReducers({
  listArticles,
  itemArticle
});

export default rootReducer;
