import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useESADState } from '@codemoreira/esad/client';
import { Theme } from '../theme/tokens';

/**
 * MainScreen — exported as the federated module's public surface.
 *
 * Demonstrates:
 * 1. useESADState  — reads/writes cross-module global state.
 *    The host wrote `auth_user` via AuthContext; we read it here with no props.
 * 2. Local counter — shows how modules can have their own private state too.
 */
export const MainScreen: React.FC = () => {
  // ── Global state shared by the Host via AuthContext ──────────────────────
  // 'auth_user' was set in the Host's signIn() — no prop drilling needed.
  const [authUser] = useESADState<{ name: string } | null>('auth_user', null);

  // ── Local counter — module-private state ─────────────────────────────────
  const [count, setCount] = useESADState<number>('sample_counter', 0);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scroll}>

      {/* ── Module Info ─────────────────────────────────────────────── */}
      <Text style={styles.tag}>🧩 Federated Module</Text>
      <Text style={styles.title}>Sample Module</Text>
      <Text style={styles.subtitle}>
        This screen is loaded dynamically at runtime via Module Federation.
      </Text>

      <View style={styles.divider} />

      {/* ── useESADState: read host state ───────────────────────────── */}
      <Text style={styles.sectionTitle}>useESADState — Global State</Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>auth_user (set by Host →):</Text>
        <Text style={styles.cardValue}>
          {authUser ? `✅  ${authUser.name}` : '❌  Not signed in'}
        </Text>
        <Text style={styles.cardHint}>
          This value was written by the Host's AuthContext.{'\n'}
          No props, no events — just shared state.
        </Text>
      </View>

      {/* ── useESADState: read/write shared counter ─────────────────── */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>sample_counter (shared):</Text>
        <Text style={styles.cardValue}>{count}</Text>
        <Text style={styles.cardHint}>
          This counter is visible to the Host and every other module.
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            accessibilityRole="button"
            accessibilityLabel="Decrease counter"
            onPress={() => setCount((count ?? 0) - 1)}>
            <Text style={styles.btnText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            accessibilityRole="button"
            accessibilityLabel="Increase counter"
            onPress={() => setCount((count ?? 0) + 1)}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: { backgroundColor: Theme.colors.darker },
  container: {
    flexGrow: 1,
    padding: Theme.spacing.l,
  },
  tag: {
    color: Theme.colors.gray1,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: Theme.spacing.xs,
  },
  title: {
    ...Theme.typography.h1,
    color: Theme.colors.white,
    marginBottom: Theme.spacing.s,
  },
  subtitle: {
    ...Theme.typography.body,
    color: Theme.colors.gray1,
    marginBottom: Theme.spacing.m,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.colors.light,
    marginVertical: Theme.spacing.l,
  },
  sectionTitle: {
    ...Theme.typography.h3,
    color: Theme.colors.white,
    marginBottom: Theme.spacing.m,
  },
  card: {
    backgroundColor: Theme.colors.medium,
    borderRadius: Theme.radius.m,
    padding: Theme.spacing.m,
    marginBottom: Theme.spacing.m,
    borderWidth: 1,
    borderColor: Theme.colors.light,
  },
  cardLabel: {
    ...Theme.typography.caption,
    color: Theme.colors.gray1,
    marginBottom: Theme.spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardValue: {
    ...Theme.typography.h3,
    color: Theme.colors.white,
    marginBottom: Theme.spacing.s,
  },
  cardHint: {
    ...Theme.typography.caption,
    color: Theme.colors.gray2,
    marginTop: Theme.spacing.xs,
  },
  row: {
    flexDirection: 'row',
    gap: Theme.spacing.s,
    marginTop: Theme.spacing.m,
  },
  btn: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.radius.s,
    paddingVertical: Theme.spacing.s,
    alignItems: 'center',
  },
  btnText: {
    ...Theme.typography.button,
    color: Theme.colors.white,
    fontSize: 20,
  },
});
