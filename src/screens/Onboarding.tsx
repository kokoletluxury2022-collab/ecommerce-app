import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
};

type OnboardingProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export const Onboarding = ({ navigation }: OnboardingProps) => {
  const handleGetStarted = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            style={styles.signalIcon}
            source={{ uri: 'https://c.animaapp.com/miuqn5vnLu00l9/img/icon---mobile-signal.svg' }}
          />
          <Image
            style={styles.wifiIcon}
            source={{ uri: 'https://c.animaapp.com/miuqn5vnLu00l9/img/wifi.svg' }}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Define yourself in your unique way.</Text>
        <Image
          style={styles.mainImage}
          source={{ uri: 'https://c.animaapp.com/miuqn5vnLu00l9/img/image.png' }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.homeIndicator} />
      </View>
    </View>
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
    paddingTop: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 48,
    marginBottom: 30,
    zIndex: 10,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 30,
    left: 12,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 54,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 8,
  },
});
