import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';

type StyledProps = {
  theme: DefaultTheme;
  color: string;
};

const HorizontalLineView = styled.View`
  background: ${({ theme, color }: StyledProps) => theme[`${color}Color`]};
  height: 1px;
`;

type HorizontalLinePublicProps = MarginSpacingHOCProps & {
  color?: 'border' | 'primary';
};

type HorizontalLinePrivateProps = HorizontalLinePublicProps & {};

const HorizontalLine = ({ color = 'border' }: HorizontalLinePrivateProps) => {
  return <HorizontalLineView color={color} />;
};

export default MarginSpacingHOC<HorizontalLinePrivateProps>(HorizontalLine);
