import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';

import useRates from '../hooks/useRates';

export default function ConversionScreen() {
  const rates = useRates();

  return (
    <View>
      <Text>Convertion Screen</Text>
      <Text>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</Text>
    </View>
  );
}
