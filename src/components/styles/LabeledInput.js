// @flow

import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../Theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingHorizontal: 25,
    paddingVertical: 4,
    marginVertical: 8,
  },
  label: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input,
    color: Colors.lightRed,
  },
  inputField: {
    height: 45,
    minWidth: 200,
    borderColor: Colors.lightRed,
    borderWidth: 2,
    alignItems: 'stretch',
    paddingHorizontal: 12,
    borderRadius: 10,
    color: Colors.lightRed,
  },
  placeholderText: {
    color: Colors.pink,
  },
  selection: {
    color: Colors.lightRed,
  },
});
