import React, { RefObject, useContext } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { DefaultTheme, ThemeContext } from 'styled-components';

import styled from '../../../styles/styled';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';
import FormError from './FormError';
import Label from './Label';

type InputStyledProps = {
  theme: DefaultTheme;
  focused: boolean | undefined;
  lines: number | undefined;
  hasIcon: boolean;
};

const RelativeView = styled.View`
  position: relative;
`;

const IconView = styled.View`
  bottom: ${({ theme }) => theme.normalSpacing}px;
  position: absolute;
  right: ${({ theme }) => theme.normalSpacing}px;
`;

const InputStyled = styled.TextInput`
  border: ${({ theme, focused }: InputStyledProps) => `1px solid ${focused ? theme.ctaColor : theme.borderColor}`};
  border-radius: ${({ theme }) => theme.extraSmallRadius}px;
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.mediumFont};
  font-size: ${({ theme }) => theme.smallFontSize}px;
  height: ${({ lines }: InputStyledProps) => (lines ? `${lines * 30}px` : 'auto')};
  padding: ${({ theme }) => theme.normalSpacing}px;
  padding-right: ${({ hasIcon }: InputStyledProps) => `${hasIcon ? '10%' : undefined}`};
  text-align-vertical: ${({ lines }: InputStyledProps) => (lines ? 'top' : 'center')};
  width: 100%; ;
`;

export type InputPublicProps = MarginSpacingHOCProps &
  TextInputProps & {
    label?: string;
    error?;
    touched?: boolean;
    focused?: boolean;
    lines?: number;
    icon?: React.ReactNode;
    inputRef?: RefObject<TextInput>;
  };

type InputPrivateProps = InputPublicProps & {};

const Input = ({ label, error, touched, lines = undefined, focused, icon, inputRef, ...props }: InputPrivateProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      {label && <Label>{label}</Label>}

      <RelativeView>
        <InputStyled
          placeholderTextColor={themeContext.secondaryColor}
          placeholderStyle={{
            fontFamily: themeContext.mediumFont,
            fontSize: themeContext.smallFontSize,
          }}
          autoCapitalize="none"
          lines={lines}
          hasIcon={!!icon}
          multiline={!!lines}
          focused={focused}
          ref={inputRef}
          {...props}
        />

        {icon && <IconView>{icon}</IconView>}
      </RelativeView>

      {error && touched && <FormError error={error} />}
    </>
  );
};

export default MarginSpacingHOC<InputPrivateProps>(Input);
