import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import moment from 'moment';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';

import CurrencySelector from '../components/app/currency/CurrencySelector';
import FlexContainer from '../components/ui/containers/FlexContainer';
import PaddingContainer from '../components/ui/containers/PaddingContainer';
import MainHeading from '../components/ui/text/headings/MainHeading';
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
        <PaddingContainer paddingLeft={2} paddingRight={2} paddingTop={2} paddingBottom={4}>
          <MainHeading>Conversion from CZK</MainHeading>
          <MiniText>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</MiniText>
        </PaddingContainer>
        <Button
          onPress={() => bottomSheetModalRef.current?.present()}
          title="Select conversion currency"
          color="black"
        />

        <View>
          <TextInput
            keyboardType="number-pad"
            onChangeText={(text) => setCurrencyInput(parseFloat(text) || 0)}
            value={currencyInput.toString()}
            returnKeyType="done"
          />
          {selectedConversionCurrency && (
            <Text>{`${currencyInput / selectedConversionCurrency.rate} ${selectedConversionCurrency.currency}`}</Text>
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
        </View>
      </FlexContainer>
    </BottomSheetModalProvider>
  );
}
