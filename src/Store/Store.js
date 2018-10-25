// @flow

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from '../Reducers';

export const Store = createStore(reducers, applyMiddleware(ReduxThunk));
