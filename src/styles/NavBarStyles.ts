import { StyleSheet } from 'react-native';

import { colors } from '../constants/COLORS';

export const styles = StyleSheet.create({
  screen: {
    width: 225,
    backgroundColor: colors.backgroundLight,
  },
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundPanel,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundPanel,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  brandWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoImage: {
    width: 35,
    height: 35,
    borderRadius: 8,
    marginRight: 4,
  },
  brandTextWrap: {
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 16,
    fontFamily: 'Syne_700Bold',
    fontWeight: '700',
    color: colors.text,
  },
  brandSubtitle: {
    fontSize: 11,
    fontFamily: 'DMSans_300Light',
    color: colors.textMuted,
    marginTop: -4,
    fontWeight: '500',
  },
  menuButton: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 18,
  },
  userCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    minHeight: 64,
    justifyContent: 'center',
  },
  userName: {
    color: colors.textStrong,
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
    paddingBottom: 4,
    fontWeight: '500',
  },
  userRole: {
    color: colors.textSecondary,
    fontSize: 12,
    fontFamily: 'DMSans_500Medium',
    fontWeight: '500',
  },
  menuItemButton: {
    borderRadius: 12,
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
  },
  activeMenuItemButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    shadowColor: colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuIcon: {
  width: 16,
  alignItems: 'center',
  justifyContent: 'center',
},
  menuText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
    fontFamily: 'DMSans_500Medium',
    flexShrink: 1,
  },
  activeMenuText: {
    color: colors.white,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.borderSoft,
  },
  logoutText: {
    marginLeft: 8,
    color: colors.dangerStrong,
    fontSize: 14,
    paddingLeft: 4,
    fontFamily: 'DMSans_500Medium',
    fontWeight: '500',
  },
  footerContainer: {
  paddingHorizontal: 12,
  paddingVertical: 24,
  backgroundColor: '#FFFFFF',
},
});
