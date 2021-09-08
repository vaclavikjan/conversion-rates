import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const SmallText = (props: BasicTextPublicProps) => {
  return <BasicText weight="medium" size="small" {...props} />;
};

export default SmallText;
