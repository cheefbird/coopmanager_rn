// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../components/Card';
import LabeledInput from '../components/LabeledInput';
import ButtonSecondary from '../components/ButtonSecondary';
import { authenticateUser } from '../Actions';
import styles from './Styles/LoginScreen';

type Props = {
  navigation: NavigationScreenProp<{}>,
};

type State = {
  username: string,
  password: string,
};

class LoginScreen extends Component<Props, State> {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    username: '',
    password: '',
  };

  handleUsername = (text: string) => this.setState({ username: text });

  handlePassword = (text: string) => this.setState({ password: text });

  fakeLogin = () => {
    const { navigation } = this.props;
    console.log(this.state);
    navigation.navigate('Home');
  };

  loginUser = (email: string, password: string) => {

  }

  render() {
    return (
      <Card>
        <Text>Account Login</Text>
        <LabeledInput
          label="Username"
          placeholder="Enter your username..."
          secure={false}
          contentType="username"
          handler={this.handleUsername}
        />
        <LabeledInput
          label="Password"
          placeholder="Enter your password..."
          secure
          contentType="none"
          handler={this.handlePassword}
        />
        <ButtonSecondary label="Log In" onPress={this.fakeLogin} />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn, errorMessage } = state.userAuth;

  return { isLoggedIn, errorMessage };
};

export default connect(
  mapStateToProps,
  { authenticateUser },
)(LoginScreen);
