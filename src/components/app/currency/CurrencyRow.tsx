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
  selected: boolean;
};

const Wrapper = styled.TouchableOpacity`
  background-color: ${({ theme, selected }: StyledProps) =>
    selected ? theme.colorPalette.yellowish : theme.colorPalette.white};
  border-bottom-color: ${({ theme }: StyledProps) => theme.colorPalette.athensGray};
  border-bottom-width: 1px;
`;

export type CurrencyRowPublicProps = { item: IRate; selected: boolean; onSelect: (currency: IRate) => void };

type CurrencyRowPrivateProps = CurrencyRowPublicProps & {};

function CurrencyRow({ item, selected, onSelect }: CurrencyRowPrivateProps) {
  return (
    <Wrapper selected={selected} onPress={() => onSelect(item)}>
      <PaddingContainer paddingLeft={2} paddingRight={2} paddingTop={1.5} paddingBottom={1.5}>
        <Row>
          <Column width={10}>
            <NormalText>{item.country}</NormalText>
          </Column>
          <Column width={10}>
            <NormalText>{item.currency}</NormalText>
          </Column>
        </Row>
      </PaddingContainer>
    </Wrapper>
  );
}

export default CurrencyRow;
