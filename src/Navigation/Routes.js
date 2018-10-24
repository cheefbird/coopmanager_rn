// @flow

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import { Colors, Fonts } from '../Theme';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.darkGreen,
      },
      headerTintColor: Colors.pink,
      headerTitleStyle: {
        fontFamily: Fonts.type.bold,
      },
    },
  },
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.darkGreen,
      },
      headerTintColor: Colors.pink,
      headerTitleStyle: {
        fontFamily: Fonts.type.bold,
      },
    },
  },
);

export default createSwitchNavigator(
  {
    Auth: LoginStack,
    Content: HomeStack,
  },
  {
    initialRouteName: 'Auth',
  },
);
