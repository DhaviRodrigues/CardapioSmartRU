import { StyleSheet } from 'react-native';

import { colors } from '../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoWrap: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  logoImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  code: {
    fontSize: 72,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: -2,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.primaryDark,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 28,
    maxWidth: 340,
  },
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    maxWidth: 320,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
});
