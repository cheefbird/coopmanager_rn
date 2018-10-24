// @flow

import firebase from 'react-native-firebase';
import { AUTHENTICATE_USER } from './types';

export const authenticateUser = (email: string, password: string) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: {
          isLoggedIn: true,
          errorMessage: null,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: {
          isLoggedIn: false,
          errorMessage: error,
        },
      });
    });
};
