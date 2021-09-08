import { transparentize } from 'polished';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import BasicButton, { BasicButtonPublicProps } from './BasicButton';

const PrimaryButton = (props: BasicButtonPublicProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <BasicButton
      color={themeContext.whiteColor}
      backgroundColor={themeContext.ctaColor}
      disabledBackgroundColor={transparentize(0.5, themeContext.ctaColor)}
      boxShadow
      {...props}
    />
  );
};

export default PrimaryButton;
