// @flow

import { AUTHENTICATE_USER } from '../Actions/types';

import type { LoginState } from './LoginReducerTypes';

const INITIAL_STATE = {
  isLoggedIn: false,
  errorMessage: '',
};

export default (state: LoginState = INITIAL_STATE, action: Object) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload;

    default:
      return state;
  }
};
