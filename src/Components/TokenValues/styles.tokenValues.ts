import {StyleSheet} from 'react-native';
import {colors, Fonts, metrics} from 'Theme';
import {mvp} from 'Utils';

export const tokenValueStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: mvp(1),
    borderRadius: metrics.radius_extra,
    paddingVertical: metrics.padding_small,
    paddingHorizontal: metrics.padding_medium,
    borderColor: colors.borderLight,
  },
  texts: {
    ...Fonts.smallRegular,
  },
});
