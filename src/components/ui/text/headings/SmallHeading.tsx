import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const SmallHeading = (props: BasicTextPublicProps) => {
  return <BasicText size="small" weight="bold" letterSpacing={-1} {...props} />;
};

export default SmallHeading;
