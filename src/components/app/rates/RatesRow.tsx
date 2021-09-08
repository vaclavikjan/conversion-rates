import React from 'react';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import { IRate } from '../../../types/entities';
import PaddingContainer from '../../ui/containers/PaddingContainer';
import Column from '../../ui/grid/Column';
import Row from '../../ui/grid/Row';
import NormalText from '../../ui/text/text/NormalText';

type StyledProps = {
  theme: DefaultTheme;
};

const Wrapper = styled.View`
  background-color: ${({ theme }: StyledProps) => theme.colorPalette.white};
  border-bottom-color: ${({ theme }: StyledProps) => theme.colorPalette.athensGray};
  border-bottom-width: 1px;
`;

function RatesRow({ item }: { item: IRate }) {
  return (
    <Wrapper>
      <PaddingContainer paddingLeft={2} paddingRight={2} paddingTop={1.5} paddingBottom={1.5}>
        <Row>
          <Column width={11}>
            <NormalText>{item.country}</NormalText>
          </Column>
          <Column width={7}>
            <NormalText>{item.currency}</NormalText>
          </Column>
          <Column width={6}>
            <NormalText>{(item.rate / item.quantity).toPrecision(5)}</NormalText>
          </Column>
        </Row>
      </PaddingContainer>
    </Wrapper>
  );
}

export default RatesRow;
