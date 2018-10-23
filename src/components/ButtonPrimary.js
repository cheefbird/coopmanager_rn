// @flow

import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/ButtonPrimary';

type Function = () => void;

type Props = {
  label: string,
  onPress: Function,
};

export default class ButtonPrimary extends PureComponent<Props> {
  render() {
    const { label, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={styles.underlay.color}
          activeOpacity={0.9}
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.label}>{label}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
