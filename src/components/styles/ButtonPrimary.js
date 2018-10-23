// @flow

import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../Theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.lightRed,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontFamily: Fonts.type.base,
    color: Colors.darkGreen,
  },
});
