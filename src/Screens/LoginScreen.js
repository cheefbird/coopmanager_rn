// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import LabeledInput from '../components/LabeledInput';
import ButtonSecondary from '../components/ButtonSecondary';
import styles from './Styles/LoginScreen';

type Props = {
  navigate: NavigationScreenProp<{}>,
};

type State = {
  username: string,
  password: string,
};

export default class LoginScreen extends Component<Props, State> {
  state = {
    username: '',
    password: '',
  };

  handleUsername = (text: string) => this.setState({ username: text });

  handlePassword = (text: string) => this.setState({ password: text });

  render() {
    const { username } = this.state;
    return (
      <Card>
        <Text>Account Login</Text>
        <LabeledInput
          label="Username"
          placeholder="Enter your username..."
          secure={false}
          handler={this.handleUsername}
        />
        <LabeledInput
          label="Password"
          placeholder="Enter your password..."
          secure
          handler={this.handlePassword}
        />
        <ButtonSecondary label="Log In" onPress={() => console.log(username)} />
      </Card>
    );
  }
}
