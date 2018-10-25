// @flow

import { AUTHENTICATE_USER } from '../Actions/types';

const INITIAL_STATE = {
  isLoggedIn: false,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload;

    default:
      return state;
  }
};
