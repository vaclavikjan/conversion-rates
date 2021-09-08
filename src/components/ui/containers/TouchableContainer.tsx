import React from 'react';
import { GestureResponderEvent } from 'react-native';

import styled from '../../../styles/styled';

const TouchableOpacityView = styled.TouchableOpacity``;

export type TouchableContainerPublicProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export type TouchableContainerPrivateProps = TouchableContainerPublicProps & {
  children: React.ReactNode;
};

const TouchableContainer = ({ children, onPress }: TouchableContainerPrivateProps) => {
  return <TouchableOpacityView onPress={onPress}>{children}</TouchableOpacityView>;
};

export default TouchableContainer;
