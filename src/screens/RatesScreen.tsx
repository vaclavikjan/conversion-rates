import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import useRates from '../hooks/useRates';

export default function RatesScreen() {
  const rates = useRates();

  return (
    <ScrollView>
      <Text>Rates Screen</Text>
      <View>
        {rates.data?.map((item) => (
          <Text key={item.code}>{`${item.country}: 1 ${item.currency} = ${item.rate / item.quantity} CZK`}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
