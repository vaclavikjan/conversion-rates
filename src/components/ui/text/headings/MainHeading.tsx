import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const MainHeading = (props: BasicTextPublicProps) => {
  return <BasicText size="extraLarge" weight="bold" letterSpacing={-2} {...props} />;
};

export default MainHeading;
