/**
 * @format
 *
 * This is the entry point for BOTH:
 * 1. Standalone dev mode  →  renders App.tsx as a regular RN app
 * 2. Module Federation    →  exposes MainScreen to the Host via the 'exposes' config in rspack.config.mjs
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// ── Federated Export ───────────────────────────────────────────────────────────
// The Host resolves this component at runtime via ScriptManager.
// The exposed path ('SampleModule/MainScreen') must match rspack.config.mjs 'exposes'.
export { MainScreen } from './src/screens/MainScreen';

// ── Standalone App Registration ────────────────────────────────────────────────
AppRegistry.registerComponent(appName, () => App);
