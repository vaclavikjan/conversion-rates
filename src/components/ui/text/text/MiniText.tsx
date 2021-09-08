import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const MiniText = (props: BasicTextPublicProps) => {
  return <BasicText weight="medium" size="mini" {...props} />;
};

export default MiniText;
