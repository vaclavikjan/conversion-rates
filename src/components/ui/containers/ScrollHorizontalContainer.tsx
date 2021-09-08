import React from 'react';
import { ScrollViewProps } from 'react-native';

import styled from '../../../styles/styled';

type MyScrollViewProps = {
  withFlex: boolean;
};

const ScrollView = styled.ScrollView<MyScrollViewProps>`
  ${({ withFlex }) => (withFlex === true ? 'flex: 1;' : '')}
  width: 100%;
`;

type Props = ScrollViewProps & {
  children: React.ReactNode;
  withFlex?: boolean;
};

const ScrollHorizontalContainer = ({ children, withFlex = false, ...props }: Props) => {
  return (
    <ScrollView withFlex={!!withFlex} horizontal {...props}>
      {children}
    </ScrollView>
  );
};

export default ScrollHorizontalContainer;
