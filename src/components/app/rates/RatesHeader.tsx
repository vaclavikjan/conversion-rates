import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import PaddingContainer from '../../ui/containers/PaddingContainer';
import Column from '../../ui/grid/Column';
import Row from '../../ui/grid/Row';
import Bold from '../../ui/text/Bold';

type StyledProps = {
  theme: DefaultTheme;
};

const Wrapper = styled.View`
  background-color: ${({ theme }: StyledProps) => theme.colorPalette.yellowish};
`;

function RatesHeader() {
  return (
    <Wrapper>
      <PaddingContainer paddingLeft={2} paddingRight={2} paddingTop={1} paddingBottom={1}>
        <Row>
          <Column width={11}>
            <Bold>Country</Bold>
          </Column>
          <Column width={7}>
            <Bold>Currency</Bold>
          </Column>
          <Column width={6}>
            <Bold>Rate</Bold>
          </Column>
        </Row>
      </PaddingContainer>
    </Wrapper>
  );
}

export default RatesHeader;
