import {StyleSheet} from 'react-native';
import {colors, Fonts, metrics} from 'Theme';
import {mvp} from 'Utils';

export const InputCurrencyStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    borderRadius: metrics.radius_extra,
    paddingHorizontal: metrics.padding_medium,
    paddingVertical: metrics.padding_small,
    borderWidth: mvp(1),
    borderColor: colors.background,
  },
  selectedItemText: {
    color: colors.regularText,
    marginRight: metrics.padding_compact,
  },
  dropDownItemText: {
    color: colors.darkText,
  },
  dropDownItemContainer: {
    padding: metrics.padding_medium,
  },
  input: {
    flex: 1,
    marginRight: metrics.padding_medium,
    ...Fonts.extraSemiBold,
    color: colors.regularText,
  },
  title: {
    color: colors.subText,
    position: 'absolute',
    top: mvp(-20),
    left: metrics.padding_small,
    ...Fonts.mediumSemiBold,
  },
  balance: {
    color: colors.subText,
    ...Fonts.smallRegular,
  },
  balanceCounts: {
    color: colors.regularText,
    ...Fonts.smallRegular,
  },
  inputSign: {
    color: colors.subText,
    ...Fonts.h4Regular,
    top: -mvp(2),
  },
  errorContainer: {
    borderColor: colors.borderError,
  },
  errorTextBalance: {
    color: colors.borderError,
  },
  ExceedsText: {
    color: colors.borderError,
    position: 'absolute',
    bottom: mvp(5),
    left: mvp(16),
    ...Fonts.tinyRegular,
  },
});
