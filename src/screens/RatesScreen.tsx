import moment from 'moment';
import React from 'react';
import { FlatList } from 'react-native';

import RatesHeader from '../components/app/rates/RatesHeader';
import RatesRow from '../components/app/rates/RatesRow';
import FlexContainer from '../components/ui/containers/FlexContainer';
import PaddingContainer from '../components/ui/containers/PaddingContainer';
import MainHeading from '../components/ui/text/headings/MainHeading';
import MiniText from '../components/ui/text/text/MiniText';
import useRates from '../hooks/useRates';

export default function RatesScreen() {
  const rates = useRates();

  return (
    <FlexContainer>
      <PaddingContainer paddingLeft={4} paddingRight={4} paddingTop={2} paddingBottom={4}>
        <MainHeading>Current CZK rates 📈</MainHeading>
        <MiniText>{`Last update at ${moment(rates.dataUpdatedAt).format(
          'HH:mm - DD. MM. YYYY',
        )} (pull to refresh)`}</MiniText>
      </PaddingContainer>
      <FlatList
        onRefresh={() => rates.refetch()}
        refreshing={rates?.isLoading || false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <RatesHeader />}
        keyExtractor={(item) => item.code}
        data={rates.data}
        renderItem={(row) => <RatesRow item={row.item} />}
      />
    </FlexContainer>
  );
}
