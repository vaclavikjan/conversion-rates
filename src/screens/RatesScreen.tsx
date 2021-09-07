import React from 'react';
import { Text, View } from 'react-native';

import useRates from '../hooks/useRates';

export default function RatesScreen() {
  const rates = useRates();

  return (
    <View>
      <Text>Rates Screen</Text>
    </View>
  );
}
