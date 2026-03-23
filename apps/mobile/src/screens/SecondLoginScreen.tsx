import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// Install: npx expo install expo-linear-gradient

export default function SecondLoginScreen() {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    console.log("Continue with:", email);
  };

  const handleGoogle = () => {
    console.log("Continue with Google");
  };

  const handleLinkedIn = () => {
    console.log("Continue with LinkedIn");
  };

  const handleLogin = () => {
    console.log("Navigate to Login");
  };

  return (
    <LinearGradient
      colors={["#7C3AED", "#A855C8", "#EC4899", "#F97316"]}
      locations={[0, 0.3, 0.65, 1]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.kav}
        >
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoWrapper}>
              <View style={styles.logoBox}>
                {/* Chat bubble icon — replace with your actual asset */}
                <View style={styles.bubbleOuter}>
                  <View style={styles.bubbleInner}>
                    <View style={[styles.dot, { backgroundColor: "#fff" }]} />
                    <View style={[styles.dot, { backgroundColor: "#fff" }]} />
                    <View style={[styles.dot, { backgroundColor: "#fff" }]} />
                  </View>
                  {/* Pink overlay bubble */}
                  <View style={styles.bubblePink} />
                </View>
              </View>
            </View>

            {/* Title */}
            <Text style={styles.title}>parley</Text>
            <Text style={styles.subtitle}>Your confidential HR community generated with just image</Text>

            {/* OAuth Buttons */}
            <TouchableOpacity style={styles.oauthBtn} onPress={handleGoogle} activeOpacity={0.85}>
              {/* Google "G" colored SVG replacement via text */}
              <View style={styles.oauthIconWrapper}>
                <Text style={styles.googleIcon}>G</Text>
              </View>
              <Text style={styles.oauthText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.oauthBtn} onPress={handleLinkedIn} activeOpacity={0.85}>
              <View style={[styles.oauthIconWrapper, styles.linkedinBg]}>
                <Text style={styles.linkedinIcon}>in</Text>
              </View>
              <Text style={styles.oauthText}>Continue with LinkedIn</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or with email</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="your.name@company.com"
              placeholderTextColor="rgba(255,255,255,0.55)"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueBtn} onPress={handleContinue} activeOpacity={0.85}>
              <Text style={styles.continueBtnText}>Continue  →</Text>
            </TouchableOpacity>

            {/* Log In Link */}
            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginLink}> Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
    // backgroundColor: '#A855C8',
  },
  kav: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  // Logo
  logoWrapper: {
    marginBottom: 16,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleOuter: {
    width: 48,
    height: 44,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleInner: {
    width: 40,
    height: 36,
    backgroundColor: "#F97316",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  bubblePink: {
    position: "absolute",
    bottom: 0,
    right: -4,
    width: 24,
    height: 22,
    backgroundColor: "rgba(249,115,22,0.35)",
    borderRadius: 8,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginHorizontal: 2,
  },

  // Text
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 32,
  },

  // OAuth
  oauthBtn: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  oauthIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#f3f3f3",
  },
  googleIcon: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4285F4",
  },
  linkedinBg: {
    backgroundColor: "#0A66C2",
  },
  linkedinIcon: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  oauthText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },

  // Divider
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  dividerText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 14,
    marginHorizontal: 12,
  },

  // Input
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 18,
    fontSize: 15,
    color: "#fff",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  // Continue
  continueBtn: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },
  continueBtnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.3,
  },

  // Log in row
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
  },
  loginLink: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});