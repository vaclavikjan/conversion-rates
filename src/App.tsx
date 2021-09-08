import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import RootNavigator from './navigation/RootNavigator';
import { defaultTheme } from './styles/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle="dark-content" />
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
