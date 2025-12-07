import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import { ProductProvider } from './src/contexts/ProductContext';

import { Splash } from './src/screens/Splash';
import { Onboarding } from './src/screens/Onboarding';
import { Login } from './src/screens/Login';
import { SignUp } from './src/screens/SignUp';
import { Homepage } from './src/screens/Homepage';
import { ProductDetails } from './src/screens/ProductDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <NavigationContainer>
            <StatusBar style="dark" />
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
              }}
            >
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Homepage" component={Homepage} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
