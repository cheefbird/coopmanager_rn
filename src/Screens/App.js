// @flow

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import styles from './Styles/App';

export default createStackNavigator({
  Login: LoginScreen,
});
