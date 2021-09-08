import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';

type StyledProps = {
  theme: DefaultTheme;
  color: string;
};

const VerticalLineView = styled.View`
  background: ${({ theme, color }: StyledProps) => theme[`${color}Color`]};
  height: 100%;
  width: 1px;
`;

type VerticalLinePublicProps = MarginSpacingHOCProps & {
  color?: 'border' | 'primary';
};

type VerticalLinePrivateProps = VerticalLinePublicProps & {};

const VerticalLine = ({ color = 'border' }: VerticalLinePrivateProps) => {
  return <VerticalLineView color={color} />;
};

export default MarginSpacingHOC<VerticalLinePrivateProps>(VerticalLine);
