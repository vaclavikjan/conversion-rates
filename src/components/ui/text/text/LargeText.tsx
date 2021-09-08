import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const LargeText = (props: BasicTextPublicProps) => {
  return <BasicText weight="medium" size="large" {...props} />;
};

export default LargeText;
