import React from 'react';
import { FlatList } from 'react-native';
import { DefaultTheme } from 'styled-components';

import styled from '../../../styles/styled';
import { IRate } from '../../../types/entities';
import PaddingContainer from '../../ui/containers/PaddingContainer';
import CurrencyRow from './CurrencyRow';

type StyledProps = {
  theme: DefaultTheme;
  selected: boolean;
};

const Wrapper = styled.View`
  background-color: ${({ theme }: StyledProps) => theme.colorPalette.white};
`;

export type CurrencySelectorPublicProps = {
  currencies: Array<IRate>;
  selectedCurrency: IRate;
  onSelect: (currency: IRate) => void;
};

type CurrencySelectorPrivateProps = CurrencySelectorPublicProps & {};

function CurrencySelector({ currencies, selectedCurrency, onSelect }: CurrencySelectorPrivateProps) {
  return (
    <Wrapper>
      <PaddingContainer paddingLeft={2} paddingRight={2} paddingTop={1} paddingBottom={1}>
        <FlatList
          keyExtractor={(item) => item.code}
          data={currencies}
          renderItem={(row) => (
            <CurrencyRow onSelect={onSelect} item={row.item} selected={selectedCurrency.country === row.item.country} />
          )}
        />
      </PaddingContainer>
    </Wrapper>
  );
}

export default CurrencySelector;
