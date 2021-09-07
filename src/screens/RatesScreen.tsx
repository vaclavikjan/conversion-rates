import moment from 'moment';
import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import useRates from '../hooks/useRates';

export default function RatesScreen() {
  const rates = useRates();

  return (
    <ScrollView>
      <Text>Rates Screen</Text>
      <Text>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</Text>
      {rates.isLoading ? (
        <Text>loading ...</Text>
      ) : (
        <View>
          {rates.data?.map((item) => (
            <Text key={item.code}>{`${item.country}: 1 ${item.currency} = ${item.rate / item.quantity} CZK`}</Text>
          ))}
        </View>
      )}
      <Button onPress={() => rates.refetch()} title="Refetch" />
    </ScrollView>
  );
}
