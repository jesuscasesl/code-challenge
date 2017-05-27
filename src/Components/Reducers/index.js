import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import listArticles from './listArticlesReducer';

const rootReducer = combineReducers({
  listArticles
});

export default rootReducer;
