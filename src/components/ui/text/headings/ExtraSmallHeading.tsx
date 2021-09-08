import React from 'react';

import BasicText, { BasicTextPublicProps } from '../BasicText';

const ExtraSmallHeading = (props: BasicTextPublicProps) => {
  return <BasicText size="extraSmall" weight="medium" {...props} />;
};

export default ExtraSmallHeading;
