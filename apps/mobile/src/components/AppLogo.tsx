// components/AppLogo.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtitle: string;
}

export default function AppLogo({ title, subtitle }: Props): React.JSX.Element {
  return (
    <View style={styles.container}>

      {/* Logo card */}
      <View style={styles.logoCard}>
        <View style={styles.placeholder}>
          <View style={styles.bubbleBack} />
          <View style={styles.bubbleFront}>
            <View style={styles.dotsRow}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </View>
      </View>

      {/* App name */}
      <Text style={styles.title}>{title}</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>{subtitle}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 8,
  },
  logoCard: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  placeholder: {
    width: 60,
    height: 54,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleBack: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 44,
    height: 34,
    borderRadius: 10,
    backgroundColor: 'rgba(192,38,211,0.45)',
  },
  bubbleFront: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 42,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#ea580c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 4,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
  },
});