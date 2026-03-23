// screens/LoginScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import AppLogo from '../components/AppLogo';
import IconButton from '../components/IconButton';
import OrDividerLabel from '../components/OrDividerLabel';
import EmailTextField from '../components/EmailTextField';
import ContinueButton from '../components/ContinueButton';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props): React.JSX.Element {
  const handleGoogleLogin = (): void => console.log('Google login');
  const handleLinkedInLogin = (): void => console.log('LinkedIn login');
  const handleContinue = (): void => console.log('Continue with email');
  const handleLogin = (): void => navigation.navigate('Login');

  return (
    <LinearGradient
      colors={['#7B2FBE', '#9B3EC8', '#C2457A', '#E8622A']}
      start={{ x: 0.1, y: 0.0 }}
      end={{ x: 0.9, y: 1.0 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

          {/* Top spacer — pushes content to vertical center */}
          <View style={styles.spacer} />

          {/* 1. Logo + App name + tagline */}
          <AppLogo
            title="parley"
            subtitle="Your confidential HR community generating with template"
          />

          <View style={styles.buttonGroup}>
            {/* 2. Continue with Google */}
            <IconButton
              icon={<FontAwesome5 name="google" size={22} color="#EA4335" />}
              label="Continue with Google"
              onPress={handleGoogleLogin}
              style={styles.socialButton}
              textStyle={styles.socialButtonText}
            />

            {/* 3. Continue with LinkedIn */}
            <IconButton
              icon={<FontAwesome5 name="linkedin" size={22} color="#fff" />}
              label="Continue with LinkedIn"
              onPress={handleLinkedInLogin}
              style={styles.socialButton}
              textStyle={styles.socialButtonText}
              iconContainerStyle={styles.linkedInIconBadge}
            />
          </View>

          {/* 4. Or with email divider */}
          <OrDividerLabel label="or with email" />

          {/* 5. Email text field */}
          <EmailTextField placeholder="your.name@company.com" />

          {/* 6. Continue button */}
          <ContinueButton label="Continue" onPress={handleContinue} />

          {/* 7. Already have an account */}
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom spacer */}
          <View style={styles.spacer} />

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
  buttonGroup: {
    width: '100%',
    gap: 10,
    marginBottom: 4,
  },
  socialButton: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 0,
    borderRadius: 16,
    width: '100%',
  },
  socialButtonText: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: '600',
  },
  linkedInIconBadge: {
    backgroundColor: '#0A66C2',
    borderRadius: 6,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  loginText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
  },
  loginLink: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});