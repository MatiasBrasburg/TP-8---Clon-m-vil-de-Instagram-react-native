import { StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  screenTitle: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  bodyText: {
    color: colors.textPrimary,
    fontSize: 15,
    lineHeight: 21,
  },
  mutedText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});

export default globalStyles;
