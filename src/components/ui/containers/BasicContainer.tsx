import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';

export type BasicContainerRadius = 'extraLarge' | 'large' | 'normal' | 'small' | 'extraSmall' | false | number;
export type BasicContainerBackgroundColor =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'yellow'
  | 'yellowSubtle'
  | 'ctaSubtle'
  | 'cta'
  | 'darkGreen'
  | false;

type BasicContainerProps = MarginSpacingHOCProps & {
  children?: React.ReactNode;
  backgroundColor?: BasicContainerBackgroundColor;
  radius?: BasicContainerRadius;
  radiusTopLeft?: BasicContainerRadius;
  radiusTopRight?: BasicContainerRadius;
  radiusBottomLeft?: BasicContainerRadius;
  radiusBottomRight?: BasicContainerRadius;
  withBoxShadow?: boolean;
  withBoxShadowBottom?: boolean;
  withOverflowHidden?: boolean;
  withBorder?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  fixHeight?: number | false;
  fixWidth?: number | false;
  alignToRight?: boolean;
  centered?: boolean;
  verticalCentered?: boolean;
  horizontalCentered?: boolean;
};

type BasicContainerStyledProps = BasicContainerProps & {
  theme: DefaultTheme;
};

const BasicContainer = styled.View<BasicContainerStyledProps>`
  ${({ theme, backgroundColor }) => {
    if (backgroundColor) {
      return `background-color: ${theme[`${backgroundColor}Color`]};`;
    }
  }}

  ${({ theme, radius }) => (radius ? `border-radius: ${theme[`${radius}Radius`] ?? radius}px;` : '')}}
  ${({ theme, radiusTopLeft }) =>
    radiusTopLeft ? `border-top-left-radius: ${theme[`${radiusTopLeft}Radius`] ?? radiusTopLeft}px;` : ''}}
  ${({ theme, radiusTopRight }) =>
    radiusTopRight ? `border-top-right-radius: ${theme[`${radiusTopRight}Radius`] ?? radiusTopRight}px;` : ''}}
  ${({ theme, radiusBottomLeft }) =>
    radiusBottomLeft ? `border-bottom-left-radius: ${theme[`${radiusBottomLeft}Radius`] ?? radiusBottomLeft}px;` : ''}}
  ${({ theme, radiusBottomRight }) =>
    radiusBottomRight
      ? `border-bottom-right-radius: ${theme[`${radiusBottomRight}Radius`] ?? radiusBottomRight}px;`
      : ''}}

  ${({ theme, withBorder }) => {
    if (withBorder) {
      return `
        border-width: 1px;
        border-color: ${theme.borderColor};
      `;
    }
  }}

  ${({ withBoxShadow }) => {
    if (withBoxShadow) {
      return `
        box-shadow: 1px 3px 13px rgba(0, 0, 0, 0.15);
        elevation: 3;
      `;
    }
  }}

  ${({ withOverflowHidden }) => (withOverflowHidden ? 'overflow: hidden;' : '')}
  ${({ fullHeight }) => (fullHeight ? 'height: 100%;' : '')}
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
  ${({ fixHeight }) => (fixHeight ? `height: ${fixHeight}px;` : '')}
  ${({ fixWidth }) => (fixWidth ? `width: ${fixWidth}px;` : '')}
  ${({ verticalCentered, centered }) => (verticalCentered || centered ? 'justify-content: center;' : '')}
  ${({ horizontalCentered, centered }) => (horizontalCentered || centered ? 'align-items: center;' : '')}
  ${({ alignToRight }) => (alignToRight ? 'align-items: flex-end;' : '')}
`;

export default MarginSpacingHOC<BasicContainerProps>(BasicContainer);
