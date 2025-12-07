# Expo React Native App - Setup Instructions

Your web app has been successfully converted to React Native using Expo!

## View with Expo Go

### Prerequisites
1. Install Expo Go on your mobile device:
   - iOS: Download from the App Store
   - Android: Download from Google Play Store

### Running the App

1. Start the Expo development server:
   ```bash
   npm start
   ```

2. Once the server starts, you'll see a QR code in your terminal.

3. Scan the QR code:
   - **iOS**: Open the Camera app and scan the QR code. Tap the notification to open in Expo Go.
   - **Android**: Open the Expo Go app and use the built-in QR scanner.

4. The app will load on your device!

### Troubleshooting

- Make sure your phone and computer are on the same WiFi network
- If the QR code doesn't appear, try running `npm start --tunnel`
- Clear the Expo Go cache if you encounter issues: Shake your device → "Reload"

## App Features

Your e-commerce app includes:
- Splash screen with animation
- Onboarding flow
- User authentication (Login/SignUp) with Supabase
- Product browsing with categories and search
- Product details page
- Shopping cart functionality
- WooCommerce integration for products

All your existing screen designs have been preserved and converted to React Native components!

## Development Commands

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator (Mac only)
- `npm run web` - Run in web browser

## Environment Variables

Your Supabase and WooCommerce credentials are configured in the `.env` file with the EXPO_PUBLIC_ prefix.

Enjoy your React Native app!
