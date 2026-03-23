// components/IconButton.tsx

import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface Props {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconContainerStyle?: ViewStyle;
}

export default function IconButton({
  icon,
  label,
  onPress,
  style,
  textStyle,
  iconContainerStyle,
}: Props): React.JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Icon container — optionally styled (e.g. LinkedIn blue badge) */}
      <View style={[styles.iconWrapper, iconContainerStyle]}>
        {icon}
      </View>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    width: '100%',
  },
  iconWrapper: {
    marginRight: 14,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});