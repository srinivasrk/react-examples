import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

// always call form key attribute for redux-form
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});