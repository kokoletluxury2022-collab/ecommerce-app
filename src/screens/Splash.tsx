import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
};

type SplashProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

export const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            style={styles.signalIcon}
            source={{ uri: 'https://c.animaapp.com/miuq9ynlM7LhqV/img/icon---mobile-signal.svg' }}
          />
          <Image
            style={styles.wifiIcon}
            source={{ uri: 'https://c.animaapp.com/miuq9ynlM7LhqV/img/wifi.svg' }}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://c.animaapp.com/miuq9ynlM7LhqV/img/vector.svg' }}
        />
      </View>

      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    color: '#FFFFFF',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 134,
    height: 133,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 72,
    gap: 20,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    marginBottom: 8,
  },
});
