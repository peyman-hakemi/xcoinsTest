import {StyleSheet} from 'react-native';
import {colors, metrics} from 'Theme';

export const exchangeCoinsStyles = StyleSheet.create({
  centerContainer: {
    borderRadius: metrics.radius_extra,
    backgroundColor: colors.exchangeBackground,
    paddingHorizontal: metrics.padding_medium,
    paddingVertical: metrics.padding_extra,
  },
});
