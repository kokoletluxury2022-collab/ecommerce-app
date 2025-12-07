import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Homepage: undefined;
};

type SignUpProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

export const SignUp = ({ navigation }: SignUpProps) => {
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setError('');
    setLoading(true);

    const { error } = await signUp(email, password, fullName);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      navigation.replace('Homepage');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            style={styles.signalIcon}
            source={{ uri: 'https://c.animaapp.com/miuqrghpYehOeN/img/icon---mobile-signal.svg' }}
          />
          <Image
            style={styles.wifiIcon}
            source={{ uri: 'https://c.animaapp.com/miuqrghpYehOeN/img/wifi.svg' }}
          />
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Let's create your account.</Text>

        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            placeholderTextColor="#999999"
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor="#999999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#999999"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.eyeText}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.terms}>
          By signing up you agree to our <Text style={styles.underline}>Terms</Text>,{' '}
          <Text style={styles.underline}>Privacy Policy</Text>, and{' '}
          <Text style={styles.underline}>Cookie Use</Text>
        </Text>

        <TouchableOpacity
          style={[styles.signupButton, loading && styles.signupButtonDisabled]}
          onPress={handleSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.signupButtonText}>Create an Account</Text>
          )}
        </TouchableOpacity>

        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or</Text>
          <View style={styles.separatorLine} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={{ uri: 'https://c.animaapp.com/miuqrghpYehOeN/img/logos-google-icon.svg' }}
          />
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image
            style={styles.socialIcon}
            source={{ uri: 'https://c.animaapp.com/miuqrghpYehOeN/img/logos-facebook.svg' }}
          />
          <Text style={[styles.socialButtonText, styles.facebookButtonText]}>
            Sign Up with Facebook
          </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginText, styles.loginLink]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.homeIndicator} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 27,
    paddingTop: 14,
    height: 47,
  },
  time: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signalIcon: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  contentContainer: {
    paddingTop: 12,
    paddingBottom: 27,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F7F7F',
    marginBottom: 46,
  },
  errorContainer: {
    padding: 12,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 10,
    marginBottom: 16,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000000',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 56,
  },
  eyeButton: {
    position: 'absolute',
    right: 20,
    top: 14,
    padding: 4,
  },
  eyeText: {
    fontSize: 20,
  },
  terms: {
    fontSize: 14,
    color: '#000000',
    marginTop: 14,
    marginBottom: 64,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  signupButton: {
    height: 54,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signupButtonDisabled: {
    opacity: 0.5,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 44,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#F2F2F2',
  },
  separatorText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#7F7F7F',
  },
  socialButton: {
    height: 56,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
    borderColor: '#1877F2',
    marginBottom: 40,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  facebookButtonText: {
    color: '#FFFFFF',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: '#7F7F7F',
  },
  loginLink: {
    color: '#000000',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
  },
});
