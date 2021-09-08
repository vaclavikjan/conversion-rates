import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import LargeText from '../components/ui/text/text/LargeText';
import ConversionScreen from '../screens/ConversionScreen';
import RatesScreen from '../screens/RatesScreen';

function RootNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Rates"
          component={RatesScreen}
          options={{
            tabBarIcon: () => <LargeText>📈</LargeText>,
          }}
        />
        <Tab.Screen
          name="Conversion"
          component={ConversionScreen}
          options={{
            tabBarIcon: () => <LargeText>🔄</LargeText>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
