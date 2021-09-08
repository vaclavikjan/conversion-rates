import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const ExtraSmallText = (props: BasicTextPublicProps) => {
  return <BasicText weight="medium" size="extraSmall" {...props} />;
};

export default ExtraSmallText;
