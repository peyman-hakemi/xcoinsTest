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
  },
  pickerContainer: {
    flexDirection: 'row',
  },
  selectedItemText: {
    color: colors.regularText,
    marginRight: metrics.padding_compact,
  },
  input: {
    flex: 1,
    marginRight: metrics.padding_medium,
    ...Fonts.extraSemiBold,
    color: colors.regularText,
  },
  title: {
    color: colors.regularText,
    position: 'absolute',
    top: mvp(-20),
    left: metrics.padding_small,
  },
  balance: {
    color: colors.regularText,
    position: 'absolute',
    top: mvp(-20),
    right: metrics.padding_small,
  },
});
