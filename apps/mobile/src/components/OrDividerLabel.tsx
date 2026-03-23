// components/OrDividerLabel.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  label?: string;
}

export default function OrDividerLabel({ label = 'or with email' }: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  label: {
    marginHorizontal: 14,
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
  },
});