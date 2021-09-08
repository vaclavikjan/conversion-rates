import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import useRates from '../hooks/useRates';
import { IRate } from '../types/entities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default function ConversionScreen() {
  const rates = useRates();

  const [currencyInput, setCurrencyInput] = useState(1);
  const [selectedConversionCurrency, setSelectedConversionCurrency] = useState<IRate | null>(null);

  useEffect(() => {
    if (rates.data?.length) {
      setSelectedConversionCurrency(rates.data[0]);
    }
  }, [rates.isLoading]);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalOpen = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View>
        <Text>Convertion Screen</Text>
        <Text>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</Text>
        <Button onPress={handlePresentModalOpen} title="Present Modal" color="black" />

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
            <ScrollView>
              <View style={styles.contentContainer}>
                {rates?.data?.map((rate) => (
                  <TouchableOpacity
                    key={rate.country}
                    onPress={() => {
                      setSelectedConversionCurrency(rate);
                      handlePresentModalClose();
                    }}
                  >
                    <Text>{`${rate.country} ${rate.currency}`}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </BottomSheetModal>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
}
