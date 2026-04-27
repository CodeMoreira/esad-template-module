/**
 * Module-level constants.
 * Reads from .env via react-native-dotenv (configured in babel.config.js).
 */
export const ENV = {
  REGISTRY_URL: process.env.EXPO_PUBLIC_REGISTRY_URL ?? 'http://localhost:3000',
  AUTH_TOKEN: process.env.EXPO_PUBLIC_REGISTRY_AUTH_TOKEN ?? '',
};
