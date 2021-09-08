import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import moment from 'moment';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import CurrencySelector from '../components/app/currency/CurrencySelector';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import BasicContainer from '../components/ui/containers/BasicContainer';
import FlexContainer from '../components/ui/containers/FlexContainer';
import KeyboardAvoidingContainer from '../components/ui/containers/KeyboardAvoidingContainer';
import PaddingContainer from '../components/ui/containers/PaddingContainer';
import Input from '../components/ui/inputs/Input';
import Bold from '../components/ui/text/Bold';
import MainHeading from '../components/ui/text/headings/MainHeading';
import ExtraLargeText from '../components/ui/text/text/ExtraLargeText';
import LargeText from '../components/ui/text/text/LargeText';
import MiniText from '../components/ui/text/text/MiniText';
import useRates from '../hooks/useRates';
import { IRate } from '../types/entities';

export default function ConversionScreen() {
  const rates = useRates();

  const [currencyInput, setCurrencyInput] = useState(1);
  const [selectedConversionCurrency, setSelectedConversionCurrency] = useState<IRate | null>(null);

  useEffect(() => {
    if (rates.data?.length) {
      setSelectedConversionCurrency(rates.data[0]);
    }
  }, [rates.isLoading]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const onCurrencySelect = (currency: IRate) => {
    setSelectedConversionCurrency(currency);
    bottomSheetModalRef.current?.close();
  };

  return (
    <BottomSheetModalProvider>
      <FlexContainer>
        <KeyboardAvoidingContainer>
          <PaddingContainer paddingLeft={4} paddingRight={4} paddingTop={2} paddingBottom={4}>
            <MainHeading>Convert from CZK 🇨🇿</MainHeading>
            <MiniText>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</MiniText>
            <PrimaryButton
              marginTop={5}
              onPress={() => bottomSheetModalRef.current?.present()}
              text="Select conversion currency"
            />
            <Input
              marginTop={5}
              keyboardType="number-pad"
              onChangeText={(text) => setCurrencyInput(parseFloat(text) || 0)}
              value={currencyInput.toString()}
              returnKeyType="done"
              icon={<Bold>CZK</Bold>}
            />
            <BasicContainer horizontalCentered verticalCentered marginTop={3} marginBottom={3}>
              <ExtraLargeText>⬇️</ExtraLargeText>
            </BasicContainer>
            {selectedConversionCurrency && (
              <LargeText marginTop={3}>{`${currencyInput / selectedConversionCurrency.rate} ${
                selectedConversionCurrency.currency
              }`}</LargeText>
            )}
            <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints} enablePanDownToClose>
              {rates.data && selectedConversionCurrency ? (
                <CurrencySelector
                  currencies={rates?.data}
                  selectedCurrency={selectedConversionCurrency}
                  onSelect={onCurrencySelect}
                />
              ) : (
                <ActivityIndicator animating />
              )}
            </BottomSheetModal>
          </PaddingContainer>
        </KeyboardAvoidingContainer>
      </FlexContainer>
    </BottomSheetModalProvider>
  );
}
