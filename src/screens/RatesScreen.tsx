import moment from 'moment';
import React from 'react';

import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import BasicContainer from '../components/ui/containers/BasicContainer';
import ScrollContainer from '../components/ui/containers/ScrollContainer';
import MainHeading from '../components/ui/text/headings/MainHeading';
import MiniText from '../components/ui/text/text/MiniText';
import NormalText from '../components/ui/text/text/NormalText';
import useRates from '../hooks/useRates';

export default function RatesScreen() {
  const rates = useRates();

  return (
    <ScrollContainer>
      <MainHeading>Rates Screen</MainHeading>
      <MiniText>{`Last update at ${moment(rates.dataUpdatedAt).format('HH:mm - DD. MM. YYYY')}`}</MiniText>
      {rates.isLoading ? (
        <MiniText>loading ...</MiniText>
      ) : (
        <BasicContainer>
          {rates.data?.map((item) => (
            <NormalText key={item.code}>{`${item.country}: 1 ${item.currency} = ${
              item.rate / item.quantity
            } CZK`}</NormalText>
          ))}
        </BasicContainer>
      )}
      <PrimaryButton onPress={() => rates.refetch()} text="Refetch" />
    </ScrollContainer>
  );
}
