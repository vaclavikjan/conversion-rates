import React from 'react';
import { Platform } from 'react-native';

import styled from '../../../styles/styled';

const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

const View = styled.View`
  height: 100%;
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
  behavior?: 'padding' | 'position';
};

const KeyboardAvoidingContainer = ({ children, behavior = 'padding' }: Props) => {
  if (Platform.OS === 'android') {
    return <View>{children}</View>;
  }

  return (
    <KeyboardAvoidingView behavior={behavior} style={{ flex: 1 }}>
      <View>{children}</View>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingContainer;
