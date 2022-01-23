import {StyleSheet} from 'react-native';
import {colors, Fonts, metrics} from 'Theme';
import {mvp} from 'Utils';

export const buttonStyles = StyleSheet.create({
  container: {
    height: mvp(50),
    borderRadius: metrics.radius_extra,
    backgroundColor: colors.buttonBackground,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.buttonBackground,
    elevation: 10,
  },
  label: {
    ...Fonts.extraSemiBold,
    color: colors.darkText,
  },
  disable: {
    backgroundColor: colors.buttonBackgroundDisable,
  },
});
