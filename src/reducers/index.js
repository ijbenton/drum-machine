import { combineReducers } from 'redux';
import displayReducer from './displayReducer.js';

export default combineReducers({
  display: displayReducer
});
