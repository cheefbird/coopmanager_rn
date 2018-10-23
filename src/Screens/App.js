// @flow

import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import LabeledInput from '../components/LabeledInput';
import Card from '../components/Card';
import styles from './Styles/App';

export default () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Card>
      <ButtonPrimary label="PRIMARY BUTTON" onPress={() => console.log('PRIMARY BUTTON PRESSED')} />
      <ButtonSecondary
        label="SECONDARY BUTTON"
        onPress={() => console.log('SECONDARY BUTTON PRESSED')}
      />
      <LabeledInput
        label="Field Label"
        placeholder="Enter text..."
        secure={false}
        handler={text => console.log(`Field Value: ${text}`)}
      />
    </Card>
  </SafeAreaView>
);
