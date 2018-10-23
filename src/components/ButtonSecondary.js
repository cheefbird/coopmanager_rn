// @flow

import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/ButtonSecondary';

type Function = () => void;

type Props = {
  label: string,
  onPress: Function,
};

export default class ButtonSecondary extends PureComponent<Props> {
  render() {
    const { label, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={styles.underlay.color}
          activeOpacity={0.99}
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.label}>{label}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

ButtonSecondary.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
