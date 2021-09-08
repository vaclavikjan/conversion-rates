import React from 'react';

import MarginContainer, { MarginContainerPublicProps } from '../containers/MarginContainer';

export type MarginSpacingHOCProps = MarginContainerPublicProps;

export default function <T>(WrappedComponent) {
  return ({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginIsPercent,
    ...props
  }: MarginSpacingHOCProps & T) => {
    return (
      <MarginContainer
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginIsPercent={marginIsPercent}
      >
        <WrappedComponent {...props} />
      </MarginContainer>
    );
  };
}
