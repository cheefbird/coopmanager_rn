// @flow

import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/LabeledInput';

type Props = {
  label: string,
  placeholder: string,
  secure: boolean,
  handler: (text: string) => void,
};

type State = {
  text: string,
};

export default class LabeledInput extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = { text: '' };
  }

  textChanged = (text: string) => this.setState({ text });

  setValue = () => {
    const { text } = this.state;
    const { handler } = this.props;

    handler(text);
  };

  render() {
    const { label, placeholder, secure } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={styles.placeholderText.color}
          selectionColor={styles.selection.color}
          secureTextEntry={secure}
          style={styles.inputField}
          onChangeText={this.textChanged}
          onEndEditing={this.setValue}
        />
      </View>
    );
  }
}

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secure: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};
