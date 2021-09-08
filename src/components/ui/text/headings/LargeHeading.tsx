import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const LargeHeading = (props: BasicTextPublicProps) => {
  return <BasicText size="large" weight="bold" letterSpacing={-1} {...props} />;
};

export default LargeHeading;
