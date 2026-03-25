/**
 * Sample Federated Module - Teste
 * Demonstrating ESAD SDK Global State
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useESADState } from '@codemoreira/esad/client';

export default function Teste() {
  const [user] = useESADState('user');
  const [count, setCount] = useESADState('global_counter', 0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Módulo Remoto</Text>
        </View>
        
        <Text style={styles.title}>Integração com o Host</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Logado como:</Text>
          <Text style={styles.value}>{user?.name || 'Anônimo'}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.description}>
          Este componente foi carregado dinamicamente via Module Federation e 
          está acessando o estado global do SDK ESAD.
        </Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>Contador Global</Text>
          <Text style={styles.counterValue}>{count}</Text>
          
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.decrement]} 
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.buttonText}>-1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.increment]} 
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.buttonText}>+1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  badge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  badgeText: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563eb',
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#475569',
    marginBottom: 24,
  },
  counterBox: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  counterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 4,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  decrement: {
    backgroundColor: '#fee2e2',
  },
  increment: {
    backgroundColor: '#dbeafe',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
  },
});