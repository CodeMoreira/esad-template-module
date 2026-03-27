/**
 * SuperApp Module Entry Point
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Teste from './Teste';

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Teste />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
