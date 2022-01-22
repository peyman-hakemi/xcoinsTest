import {Dimensions, PixelRatio, Platform} from 'react-native';

interface IScreenDimensions {
  width: number;
  height: number;
}

const {width, height}: IScreenDimensions = Dimensions.get('window');

// design height = 640

function makeValueResponsive(value: number) {
  const designWidth = 360;
  const screenWidth = width;

  return PixelRatio.roundToNearestPixel((value * screenWidth) / designWidth);
}

const isIOS = Platform.OS === 'ios';

export {makeValueResponsive as mvp, width, height, isIOS};
