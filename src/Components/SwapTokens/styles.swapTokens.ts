import {StyleSheet} from 'react-native';
import {colors} from 'Theme';
import {mvp} from 'Utils';

export const swapTokensStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: mvp(85),
    alignSelf: 'center',
    height: mvp(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfCircle: {
    backgroundColor: colors.exchangeBackground,
    width: mvp(30),
    borderTopRightRadius: mvp(30),
    borderBottomRightRadius: mvp(30),
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -mvp(10),
  },
  halfCircleRight: {
    backgroundColor: colors.exchangeBackground,
    width: mvp(30),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: mvp(30),
    borderBottomLeftRadius: mvp(30),
    right: -mvp(10),
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
});
