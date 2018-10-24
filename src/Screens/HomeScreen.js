// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import styles from './Styles/HomeScreen';

type Props = {
  navigation: NavigationScreenProp<{}>,
};

export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Welcome to the Co-Op Manager!</Text>
      </View>
    );
  }
}
