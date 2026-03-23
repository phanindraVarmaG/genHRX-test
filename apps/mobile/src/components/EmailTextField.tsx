// components/EmailTextField.tsx

import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

export default function EmailTextField({
  placeholder = 'your.name@company.com',
  onChangeText,
  value,
}: Props): React.JSX.Element {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <View style={[styles.container, focused && styles.containerFocused]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.55)"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1.5,
    borderColor: 'transparent',
    marginTop: 4,
  },
  containerFocused: {
    borderColor: 'rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  input: {
    height: 56,
    fontSize: 15,
    color: '#fff',
  },
});