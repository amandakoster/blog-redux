import { combineReducers } from 'redux';
import PostReducer from './reducer-post';

const rootReducer = combineReducers({
  posts: PostReducer

});

export default rootReducer;
