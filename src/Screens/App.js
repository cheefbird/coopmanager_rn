// @flow

import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

import ButtonPrimary from '../components/ButtonPrimary';
import styles from './Styles/App';

export default () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <ButtonPrimary label="LABEL" onPress={() => console.log('BUTTON PRESSED')} />
  </SafeAreaView>
);
