import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useESADState } from '@codemoreira/esad/client';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

export const DetailScreen: React.FC<Props> = ({ navigation }) => {
  // SHARED STATE: This counter is shared in real-time with the Host App!
  const [counter, setCounter] = useESADState<number>('global_counter', 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shared State Demo</Text>
      <Text style={styles.subtitle}>
        This counter is reactive. Try changing it and watch the Host App update!
      </Text>
      
      <View style={styles.card}>
        <Text style={styles.counterValue}>{counter}</Text>
        <Text style={styles.label}>Global Counter</Text>
        
        <View style={styles.row}>
          <TouchableOpacity 
            style={[styles.smallButton, { backgroundColor: '#FF3B30' }]}
            onPress={() => setCounter(counter - 1)}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.smallButton, { backgroundColor: '#34C759' }]}
            onPress={() => setCounter(counter + 1)}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 30,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 40,
  },
  counterValue: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  smallButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
  }
});
