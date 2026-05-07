/**
 * @format
 *
 * This is the entry point for BOTH:
 * 1. Standalone dev mode  →  renders App.tsx as a regular RN app
 * 2. Module Federation    →  exposes the default export via 'exposes' in rspack.config.mjs
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ModuleNavigator } from './src/screens/ModuleNavigator';

// ── Federated Export ───────────────────────────────────────────────────────────
// We export the Navigator as DEFAULT to make it compatible with React.lazy
// used by the Host's SafeRemote component.
export default ModuleNavigator;

// ── Standalone App Registration ────────────────────────────────────────────────
AppRegistry.registerComponent(appName, () => App);
