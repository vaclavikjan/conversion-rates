import React from 'react';

import ExtraSmallText from '../text/text/ExtraSmallText';

export default ({ children }: { children: string }) => (
  <ExtraSmallText marginIsPercent={false} color="secondary" marginBottom={3}>
    {children}
  </ExtraSmallText>
);
