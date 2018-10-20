// @flow

import { StyleSheet } from 'react-native';

import { Fonts, Colors } from './Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
  },
  welcome: {
    fontFamily: Fonts.type.bold,
    ...Fonts.style.h1,
    color: Colors.pink,
    textAlign: 'center',
    margin: 10,
  },
});
