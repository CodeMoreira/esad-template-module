import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ModuleNavigator } from './src/screens/ModuleNavigator';

/**
 * The local development wrapper.
 * Used ONLY when running the module standalone (esad dev <id>).
 * When loaded by the Host, only the Navigator is consumed.
 */
const App = () => (
  <SafeAreaView style={styles.root}>
    <NavigationContainer>
      <ModuleNavigator />
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
});

export default App;
