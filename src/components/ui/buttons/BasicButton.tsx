import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import TouchableContainer from '../containers/TouchableContainer';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';

type TouchableProps = {
  theme: DefaultTheme;
  backgroundColor: string;
  disabledBackgroundColor: string;
  strokeColor: string;
  disabledStrokeColor: string;
  disabled: boolean;
  boxShadow: boolean;
  small: boolean;
};

const BasicButtonView = styled.View`
  background-color: ${({ backgroundColor, disabledBackgroundColor, disabled }: TouchableProps) =>
    disabled ? disabledBackgroundColor : backgroundColor};
  border: 1px solid
    ${({ strokeColor, disabledStrokeColor, disabled }) => (disabled ? disabledStrokeColor : strokeColor)};
  border-radius: ${({ theme, small }: TouchableProps) => (small ? theme.extraSmallRadius : theme.normalRadius)}px;
  ${({ boxShadow }) => (boxShadow ? 'box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);' : '')}
  padding: ${({ theme, small }: TouchableProps) => (small ? theme.smallSpacing : theme.normalSpacing)}px;
`;

type TextProps = {
  theme: DefaultTheme;
  color: string;
  disabledColor: string;
  disabled: boolean;
  small: boolean;
};

const Text = styled.Text`
  color: ${({ color, disabledColor, disabled }: TextProps) => (disabled ? disabledColor : color)};
  font-family: ${({ theme }) => theme.semiboldFont};
  font-size: ${({ theme, small }: TextProps) => (small ? theme.smallFontSize : theme.normalFontSize)}px;
  text-align: center;
`;

export type BasicButtonPublicProps = MarginSpacingHOCProps & {
  text: string;
  onPress: () => any;
  disabled?: boolean;
  small?: boolean;
};

type BasicButtonPrivateProps = BasicButtonPublicProps & {
  backgroundColor: string;
  disabledBackgroundColor?: string;
  color: string;
  disabledColor?: string;
  strokeColor?: string;
  disabledStrokeColor?: string;
  boxShadow?: boolean;
};

const BasicButton = ({
  text,
  onPress,
  backgroundColor,
  disabledBackgroundColor = backgroundColor,
  color,
  disabledColor = color,
  strokeColor = backgroundColor,
  disabledStrokeColor = disabledBackgroundColor,
  boxShadow = false,
  disabled = false,
  small = false,
}: BasicButtonPrivateProps) => {
  return (
    <TouchableContainer onPress={onPress}>
      <BasicButtonView
        disabled={disabled}
        backgroundColor={backgroundColor}
        disabledBackgroundColor={disabledBackgroundColor}
        strokeColor={strokeColor}
        disabledStrokeColor={disabledStrokeColor}
        boxShadow={boxShadow}
        small={small}
      >
        <Text color={color} disabledColor={disabledColor} disabled={disabled} small={small}>
          {text}
        </Text>
      </BasicButtonView>
    </TouchableContainer>
  );
};

export default MarginSpacingHOC<BasicButtonPrivateProps>(BasicButton);
