import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import BasicButton, { BasicButtonPublicProps } from './BasicButton';

const SecondaryButton = (props: BasicButtonPublicProps) => {
  const themeContext = useContext(ThemeContext);

  return <BasicButton color={themeContext.ctaColor} backgroundColor={themeContext.yellowSubtleColor} {...props} />;
};

export default SecondaryButton;
