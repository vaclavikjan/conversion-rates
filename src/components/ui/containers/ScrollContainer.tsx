import React from 'react';
import { ScrollViewProps } from 'react-native';

import styled from '../../../styles/styled';

type MyScrollViewProps = {
  withFlex: boolean;
};

const ScrollView = styled.ScrollView`
  ${({ withFlex }: MyScrollViewProps) => (withFlex ? 'flex: 1;' : '')}

  width: 100%;
`;

export type ScrollContainerPublicProps = ScrollViewProps & {
  withFlex?: boolean;
};

export type ScrollContainerPrivateProps = ScrollContainerPublicProps & {
  children: React.ReactNode;
};

const ScrollContainer = ({ children, withFlex = false, ...props }: ScrollContainerPrivateProps) => {
  return (
    <ScrollView withFlex={withFlex} {...props}>
      {children}
    </ScrollView>
  );
};

export default ScrollContainer;
