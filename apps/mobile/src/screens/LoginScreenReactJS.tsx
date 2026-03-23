import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withDelay,
  FadeInDown,
  ZoomIn,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export interface SignupData {
  type: 'email' | 'phone' | 'invite';
  value: string;
  inviteCode?: string;
}

interface SignupScreenProps {
  onNext?: (data: SignupData) => void;
  onSocialSignup?: (provider: 'google' | 'microsoft' | 'linkedin') => void;
  onSwitchToLogin?: () => void;
}

// --- Google Icon SVG as a component (inline via react-native-svg) ---
// If you have react-native-svg installed, use this. Otherwise swap for an <Image>.
import Svg, { Path } from 'react-native-svg';

function GoogleIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <Path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <Path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <Path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </Svg>
  );
}

function LinkedInIcon() {
  return (
    <View style={styles.linkedInIconWrapper}>
      <Svg width={16} height={16} viewBox="0 0 24 24" fill="white">
        <Path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </Svg>
    </View>
  );
}

function ArrowRightIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="#7C3AED"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

// --- Social Button ---
function SocialButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.socialBtn}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {icon}
      <Text style={styles.socialBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

// --- Main Screen ---
export function LoginScreenReactJS({ onNext, onSocialSignup, onSwitchToLogin }: SignupScreenProps) {
  const [email, setEmail] = useState('');

  const isValidEmail = email.includes('@') && email.includes('.');

  const handleSubmit = () => {
    if (isValidEmail) {
      onNext?.({ type: 'email', value: email });
    }
  };

  const handleSocialSignup = (provider: 'google' | 'microsoft' | 'linkedin') => {
    onSocialSignup?.(provider);
  };

  return (
    <LinearGradient
      colors={['#7C3AED', '#9333EA', '#EA580C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.kav}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Logo & Branding */}
            <Animated.View entering={ZoomIn.delay(100).springify()} style={styles.brandingContainer}>
              <View style={styles.logoWrapper}>
                {/* Replace with your actual logo image:
                    <Image source={require('./assets/logo.png')} style={styles.logo} /> */}
                <View style={styles.logoPlaceholder}>
                  <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
                    <Path
                      d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"
                      fill="#EA580C"
                      opacity={0.85}
                    />
                    <Path
                      d="M8 10h8M8 14h5"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </Svg>
                </View>
              </View>

              <Animated.Text entering={FadeInDown.delay(300)} style={styles.appName}>
                parley
              </Animated.Text>
              <Animated.Text entering={FadeInDown.delay(400)} style={styles.tagline}>
                Your confidential HR community generated with ReactJS code
              </Animated.Text>
            </Animated.View>

            {/* Form Section */}
            <Animated.View entering={FadeInDown.delay(500)} style={styles.formContainer}>
              {/* Google */}
              <SocialButton
                icon={<GoogleIcon />}
                label="Continue with Google"
                onPress={() => handleSocialSignup('google')}
              />

              {/* LinkedIn */}
              <SocialButton
                icon={<LinkedInIcon />}
                label="Continue with LinkedIn"
                onPress={() => handleSocialSignup('linkedin')}
              />

              {/* Divider */}
              <View style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or with email</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Email Input */}
              <TextInput
                style={styles.input}
                placeholder="your.name@company.com"
                placeholderTextColor="#94A3B8"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />

              {/* Continue Button */}
              <TouchableOpacity
                style={[styles.continueBtn, !isValidEmail && styles.continueBtnDisabled]}
                onPress={handleSubmit}
                disabled={!isValidEmail}
                activeOpacity={0.85}
              >
                <Text style={styles.continueBtnText}>Continue</Text>
                <ArrowRightIcon />
              </TouchableOpacity>

              {/* Switch to Login */}
              <View style={styles.footerRow}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={onSwitchToLogin}>
                  <Text style={styles.loginLink}>Log in</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
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
    // backgroundColor: '#7C3AED',
  },
  kav: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  // Branding
  brandingContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoWrapper: {
    marginBottom: 16,
  },
  logoPlaceholder: {
    width: 96,
    height: 96,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 22,
  },
  appName: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.9)',
  },

  // Form
  formContainer: {
    gap: 12,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  socialBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  linkedInIconWrapper: {
    width: 28,
    height: 28,
    backgroundColor: '#0077B5',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Divider
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  dividerText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.8)',
  },

  // Input
  input: {
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    fontSize: 16,
    color: '#FFFFFF',
  },

  // Continue Button
  continueBtn: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  continueBtnDisabled: {
    opacity: 0.5,
  },
  continueBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C3AED',
  },

  // Footer
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  loginLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});