import stories from './stories';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stories: stories,
});

export default rootReducer;
