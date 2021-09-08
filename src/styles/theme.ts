import { transparentize } from 'polished';
import { useContext } from 'react';
import { PixelRatio, Dimensions, Platform } from 'react-native';
import { DefaultTheme } from 'styled-components';
import { ThemeContext } from 'styled-components/native';

import colorPalette from './colors';
import { fontSizes, font } from './text';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (
  widthPercentageAndroid: number,
  widthPercentageIos: number,
  isReturnPxString = true,
): string | number => {
  const widthPercentage = Platform.OS === 'android' ? widthPercentageAndroid : widthPercentageIos;
  const size = PixelRatio.roundToNearestPixel((screenWidth * widthPercentage) / 100);

  return isReturnPxString ? `${size}px` : size;
};

const heightPercentageToDP = (
  heightPercentageAndroid: number,
  heightPercentageIos: number,
  isReturnPxString = true,
): string | number => {
  const heightPercentage = Platform.OS === 'android' ? heightPercentageAndroid : heightPercentageIos;
  const size = PixelRatio.roundToNearestPixel((screenHeight * heightPercentage) / 100);

  return isReturnPxString ? `${size}px` : size;
};

const defaultTheme: DefaultTheme = {
  colorPalette,

  // PixelRatio
  pixelRatio: PixelRatio,
  widthPercentageToDP,
  heightPercentageToDP,
  // Fonts

  // Font sizes
  extraLargeFontSize: fontSizes.extraLarge,
  largeFontSize: fontSizes.large,
  normalFontSize: fontSizes.normal,
  smallFontSize: fontSizes.small,
  extraSmallFontSize: fontSizes.extraSmall,
  miniFontSize: fontSizes.mini,

  // Font weight
  boldFont: font.bold,
  semiboldFont: font.semibold,
  mediumFont: font.medium,
  regularFont: font.regular,

  // Colors
  primaryColor: colorPalette.celtic,
  secondaryColor: colorPalette.manatee,
  ctaColor: colorPalette.pumpkin,
  ctaSubtleColor: transparentize(0.9, colorPalette.pumpkin),
  borderColor: colorPalette.athensGray,
  backgroundColor: colorPalette.mercury,
  blackColor: colorPalette.black,
  whiteColor: colorPalette.white,
  greenColor: colorPalette.emerald,
  darkGreenColor: colorPalette.greenPea,
  redColor: colorPalette.radicalRed,
  yellowShiningColor: colorPalette.supernova,
  yellowColor: colorPalette.yellowish,
  yellowSubtleColor: colorPalette.citrineWhite,
  facebookColor: colorPalette.azureRadience,

  // Spacing
  largeSpacing: 20,
  normalSpacing: 10,
  smallSpacing: 4,

  // Spacing Percent
  defaultHeightSpace: 3,
  defaultWidthSpace: 5,

  // Radius
  extraLargeRadius: 24,
  largeRadius: 20,
  normalRadius: 10,
  smallRadius: 8,
  extraSmallRadius: 5,
};

export { defaultTheme };

export const useTheme = () => useContext(ThemeContext) as DefaultTheme;
