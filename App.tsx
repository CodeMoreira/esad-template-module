import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { Theme } from './src/theme/tokens';

/**
 * The local development wrapper.
 * This file is only the shell used when running the module standalone.
 * When loaded by the Host, only MainScreen is consumed via Module Federation.
 */
const App = () => (
  <SafeAreaView style={styles.root}>
    <MainScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Theme.colors.darker },
});

export default App;
