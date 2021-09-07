import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import RootNavigator from './navigation/RootNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
