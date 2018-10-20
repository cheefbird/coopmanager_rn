// @flow

import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

import styles from './Styles';

export default () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.welcome}>Welcome to React Native!</Text>
  </SafeAreaView>
);
