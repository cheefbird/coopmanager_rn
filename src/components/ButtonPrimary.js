import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles/ButtonPrimary';

export default function ButtonPrimary({ label, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
