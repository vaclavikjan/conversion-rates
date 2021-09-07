import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ConversionScreen from '../screens/ConversionScreen';
import RatesScreen from '../screens/RatesScreen';

function RootNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Rates" component={RatesScreen} />
        <Tab.Screen name="Conversion" component={ConversionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
