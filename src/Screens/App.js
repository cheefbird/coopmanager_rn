// @flow

import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import styles from './Styles/App';

export default () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <ButtonPrimary label="PRIMARY BUTTON" onPress={() => console.log('PRIMARY BUTTON PRESSED')} />
    <ButtonSecondary
      label="SECONDARY BUTTON"
      onPress={() => console.log('SECONDARY BUTTON PRESSED')}
    />
  </SafeAreaView>
);
