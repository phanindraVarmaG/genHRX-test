// components/ContinueButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface Props {
  label?: string;
  onPress: () => void;
}

export default function ContinueButton({
  label = 'Continue',
  onPress,
}: Props): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.inner}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.28)',
    paddingVertical: 17,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  arrow: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '700',
  },
});