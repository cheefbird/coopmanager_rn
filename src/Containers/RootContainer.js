// @flow

import React from 'react';
import { Provider } from 'react-redux';

import { Store } from '../Store/Store';
import Navigator from '../Navigation/Routes';

const RootContainer = () => (
  <Provider store={Store}>
    <Navigator />
  </Provider>
);

export default RootContainer;
