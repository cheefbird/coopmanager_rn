// @flow

import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/Card';

export default function Card(props: any) {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
