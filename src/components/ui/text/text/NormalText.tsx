import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const NormalText = (props: BasicTextPublicProps) => {
  return <BasicText weight="medium" size="normal" {...props} />;
};

export default NormalText;
