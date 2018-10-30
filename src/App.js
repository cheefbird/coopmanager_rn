// @flow

import React from 'react';
import { Provider } from 'react-redux';

import { Store } from './Store/Store';
import AppNavigator from './Navigation/Routes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    );
  }
}
