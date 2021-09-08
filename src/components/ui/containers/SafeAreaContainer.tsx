import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from '../../../styles/styled';

const View = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.whiteColor};
  height: 100%;
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
  edges;
};

const SafeAreaContainer = ({ children, edges }: Props) => {
  return <View edges={edges}>{children}</View>;
};

export default SafeAreaContainer;
