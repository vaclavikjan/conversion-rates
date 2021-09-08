import React from 'react';

import styled from '../../../styles/styled';

const FlexView = styled.View`
  flex: 1;
`;

type Props = {
  children: React.ReactNode;
};

const FlexContainer = ({ children }: Props) => {
  return <FlexView>{children}</FlexView>;
};

export default FlexContainer;
