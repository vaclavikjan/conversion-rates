import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const ExtraLargeText = (props: BasicTextPublicProps) => {
  return <BasicText weight="medium" size="extraLarge" {...props} />;
};

export default ExtraLargeText;
