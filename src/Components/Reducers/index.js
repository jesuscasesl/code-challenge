import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import articleList from './articleListReducer';
import articleActive from './articleActiveReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  articleList,
  articleActive
});

export default rootReducer;
