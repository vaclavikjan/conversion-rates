import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

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

  return (
    <View>
      <Text>Convertion Screen</Text>
      <Text>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</Text>

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
      </View>
    </View>
  );
}
