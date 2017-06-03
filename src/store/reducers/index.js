import { combineReducers } from 'redux';

import listArticles from './listArticlesReducer';

const rootReducer = combineReducers({
  listArticles
});

export default rootReducer;
