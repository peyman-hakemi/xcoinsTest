import {StyleSheet} from 'react-native';
import {mvp} from 'Utils';

const size = {
  h3: mvp(24),
  h4: mvp(22),
  h5: mvp(20),
  h6: mvp(18),
  extra: mvp(16),
  medium: mvp(14),
  compact: mvp(13),
  small: mvp(12),
  tiny: mvp(10),
};

export default StyleSheet.create({
  // mvp(24)
  h3SemiBold: {
    fontSize: size.h3,
  },
  // mvp(22)
  h4Regular: {
    fontSize: size.h4,
  },
  // h5: mvp(20),
  h5Bold: {
    fontSize: size.h5,
    lineHeight: mvp(25),
  },
  h5Regular: {
    fontSize: size.h5,
    lineHeight: mvp(25),
  },
  // h6: mvp(18),
  h6Regular: {
    fontSize: size.h6,
  },
  h6SemiBold: {
    fontSize: size.h6,
    lineHeight: mvp(24),
  },
  h6Bold: {
    fontSize: size.h6,
    lineHeight: mvp(24),
  },
  // mvp(16),
  extraBlack: {
    fontSize: size.extra,
    lineHeight: mvp(20),
  },
  extraBold: {
    fontSize: size.extra,
    lineHeight: mvp(20),
  },
  extraSemiBold: {
    fontSize: size.extra,
    lineHeight: mvp(20),
  },
  extraRegular: {
    fontSize: size.extra,
    lineHeight: mvp(20),
  },
  // mvp(14),
  mediumBold: {
    fontSize: size.medium,
    lineHeight: mvp(18),
  },
  mediumSemiBold: {
    fontSize: size.medium,
    lineHeight: mvp(18),
  },
  mediumRegular: {
    fontSize: size.medium,
    lineHeight: mvp(18),
  },
  // mvp(13),
  compactBlack: {
    fontSize: size.compact,
    lineHeight: mvp(16.3),
  },
  compactSemiBold: {
    fontSize: size.compact,
    lineHeight: mvp(16.3),
  },
  compactRegular: {
    fontSize: size.compact,
    lineHeight: mvp(16.3),
  },
  // mvp(12),
  smallRegular: {
    fontSize: size.small,
    lineHeight: mvp(15),
  },
  smallSemiBold: {
    fontSize: size.small,
    lineHeight: mvp(15),
  },
  smallBold: {
    fontSize: size.small,
    lineHeight: mvp(15),
  },
  // mvp(10),
  tinySemiBold: {
    fontSize: size.tiny,
    lineHeight: mvp(12.5),
  },
  tinyRegular: {
    fontSize: size.tiny,
    lineHeight: mvp(12.5),
  },
});
