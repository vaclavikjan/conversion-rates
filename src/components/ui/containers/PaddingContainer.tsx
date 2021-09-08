import React from 'react';

import styled from '../../../styles/styled';

type StyledProps = {
  theme;
  paddingBottom: number | undefined;
  paddingLeft: number | undefined;
  paddingRight: number | undefined;
  paddingTop: number | undefined;
  isPercent: boolean;
};

const PaddingView = styled.View`
  padding-bottom: ${({ theme, paddingBottom = theme.defaultHeightSpace, isPercent }: StyledProps) =>
    isPercent ? theme.heightPercentageToDP(paddingBottom, paddingBottom) : `${paddingBottom}px`};

  padding-left: ${({ theme, paddingLeft = theme.defaultWidthSpace, isPercent }: StyledProps) =>
    isPercent ? theme.widthPercentageToDP(paddingLeft, paddingLeft) : `${paddingLeft}px`};

  padding-right: ${({ theme, paddingRight = theme.defaultWidthSpace, isPercent }: StyledProps) =>
    isPercent ? theme.widthPercentageToDP(paddingRight, paddingRight) : `${paddingRight}px`};

  padding-top: ${({ theme, paddingTop = theme.defaultHeightSpace, isPercent }: StyledProps) =>
    isPercent ? theme.heightPercentageToDP(paddingTop, paddingTop) : `${paddingTop}px`};
`;

type PaddingContainerPublicProps = {
  paddingTop?: number | true;
  paddingBottom?: number | true;
  paddingLeft?: number | true;
  paddingRight?: number | true;
  isPercent?: boolean;
};

export type PaddingContainerPrivateProps = PaddingContainerPublicProps & {
  children?: React.ReactNode;
};

const PaddingContainer = ({
  children,
  paddingTop = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingRight = 0,
  isPercent = true,
}: PaddingContainerPrivateProps) => {
  return (
    <PaddingView
      paddingBottom={paddingBottom === true ? undefined : paddingBottom}
      paddingLeft={paddingLeft === true ? undefined : paddingLeft}
      paddingRight={paddingRight === true ? undefined : paddingRight}
      paddingTop={paddingTop === true ? undefined : paddingTop}
      isPercent={isPercent}
    >
      {children}
    </PaddingView>
  );
};

export default PaddingContainer;
