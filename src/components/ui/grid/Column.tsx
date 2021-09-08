import React from 'react';

import styled from '../../../styles/styled';

const ColumnView = styled.View``;

type Props = {
  children?: React.ReactNode;
  width: number;
};

const Column = ({ children, width }: Props) => {
  const realWidth = `${Math.floor((width * 10000) / 24) / 100}%`;

  return <ColumnView style={{ width: realWidth }}>{children}</ColumnView>;
};

export default Column;
