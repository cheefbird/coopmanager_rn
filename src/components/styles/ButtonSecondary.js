// @flow

import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../Theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: Colors.lightRed,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontFamily: Fonts.type.bold,
    color: Colors.lightRed,
    fontSize: Fonts.size.h6,
  },
  underlay: {
    color: Colors.purple,
  },
});
