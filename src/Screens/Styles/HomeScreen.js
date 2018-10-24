// @flow

import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.darkGreen,
    paddingHorizontal: 20,
  },
  headline: {
    color: Colors.pink,
    fontSize: Fonts.size.h3,
    padding: 10,
    textAlign: 'center',
  },
});
