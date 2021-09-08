// import original module declarations
import 'styled-components';

import { PixelRatioStatic } from 'react-native';

import colorPalette, { ColorPalette } from './colors';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colorPalette: ColorPalette;

    // PixelRatio
    pixelRatio: PixelRatioStatic;
    widthPercentageToDP: (
      widthPercentage: number,
      widthPercentageIos: number,
      isReturnPxString?: boolean,
    ) => string | number;
    heightPercentageToDP: (
      heightPercentage: number,
      heightPercentageIos: number,
      isReturnPxString?: boolean,
    ) => string | number;

    // Fonts

    // Font sizes
    extraLargeFontSize: number;
    largeFontSize: number;
    normalFontSize: number;
    smallFontSize: number;
    extraSmallFontSize: number;
    miniFontSize: number;

    // Font weights
    boldFont: string;
    semiboldFont: string;
    mediumFont: string;
    regularFont: string;

    // Colors
    primaryColor: string;
    secondaryColor: string;
    ctaColor: string;
    ctaSubtleColor: string;
    borderColor: string;
    backgroundColor: string;
    blackColor: string;
    whiteColor: string;
    greenColor: string;
    darkGreenColor: string;
    redColor: string;
    yellowShiningColor: string;
    yellowColor: string;
    yellowSubtleColor: string;
    facebookColor: string;

    // Spacing
    largeSpacing: number;
    normalSpacing: number;
    smallSpacing: number;

    // Percent Spacing
    defaultHeightSpace: number;
    defaultWidthSpace: number;

    // Radius
    extraLargeRadius: number;
    largeRadius: number;
    normalRadius: number;
    smallRadius: number;
    extraSmallRadius: number;
  }
}
