// @flow

import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';

export default combineReducers({
  userAuth: LoginReducer,
});
