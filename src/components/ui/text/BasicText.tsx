import { transparentize } from 'polished';
import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';

type TextProps = {
  theme: DefaultTheme;
  color: string | undefined;
  center: boolean;
  size: string | undefined;
  weight: string | undefined;
  letterSpacing: number;
};

const Text = styled.Text`
  color: ${({ theme, color }: TextProps) => {
    switch (color) {
      case 'primary':
        return theme.primaryColor;
      case 'secondary':
        return theme.secondaryColor;
      case 'red':
        return theme.redColor;
      case 'cta':
        return theme.ctaColor;
      case 'inactive':
        return transparentize(0.75, theme.primaryColor);
      case 'white':
        return theme.whiteColor;
      case 'yellow':
        return theme.yellowColor;
      case 'yellowShining':
        return theme.yellowShiningColor;
      case 'green':
        return theme.greenColor;
      case 'border':
        return theme.borderColor;
      default:
        return theme.primaryColor;
    }
  }};

  font-family: ${({ theme, weight }: TextProps) => {
    switch (weight) {
      case 'bold':
        return theme.boldFont;
      case 'semibold':
        return theme.semiboldFont;
      case 'medium':
        return theme.mediumFont;
      case 'regular':
        return theme.regularFont;
      default:
        return theme.mediumFont;
    }
  }};

  font-size: ${({ theme, size }: TextProps) => {
    switch (size) {
      case 'extraLarge':
        return theme.extraLargeFontSize;
      case 'large':
        return theme.largeFontSize;
      case 'normal':
        return theme.normalFontSize;
      case 'small':
        return theme.smallFontSize;
      case 'extraSmall':
        return theme.extraSmallFontSize;
      case 'mini':
        return theme.miniFontSize;
      default:
        return theme.normalFontSize;
    }
  }}px;

  letter-spacing: ${({ letterSpacing }: TextProps) => letterSpacing}px;
  text-align: ${({ center }: TextProps) => (center ? 'center' : 'left')};
`;

export type BasicTextColor =
  | 'secondary'
  | 'red'
  | 'inactive'
  | 'cta'
  | 'white'
  | 'primary'
  | 'border'
  | 'yellow'
  | 'yellowShining'
  | 'green';
export type BasicTextWeight = 'bold' | 'semibold' | 'medium' | 'regular';
export type BasicTextSize = 'extraLarge' | 'large' | 'normal' | 'small' | 'extraSmall' | 'mini';

export type BasicTextPublicProps = MarginSpacingHOCProps & {
  children: React.ReactNode;
  color?: BasicTextColor;
  weight?: BasicTextWeight;
  center?: boolean;
  numberOfLines?: number;
};

type BasicTextPrivateProps = BasicTextPublicProps & {
  size: BasicTextSize;
  letterSpacing?: number;
};

const BasicText = ({
  children,
  color,
  center = false,
  size,
  weight,
  letterSpacing = 0,
  numberOfLines,
}: BasicTextPrivateProps) => {
  return (
    <Text
      color={color}
      center={center}
      size={size}
      weight={weight}
      letterSpacing={letterSpacing}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default MarginSpacingHOC<BasicTextPrivateProps>(BasicText);
