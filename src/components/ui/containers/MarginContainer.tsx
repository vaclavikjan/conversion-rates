import React from 'react';

import styled from '../../../styles/styled';

type StyledProps = {
  theme;
  marginBottom: number | undefined;
  marginLeft: number | undefined;
  marginRight: number | undefined;
  marginTop: number | undefined;
  marginIsPercent: boolean;
};

const MarginView = styled.View`
  margin-bottom: ${({ theme, marginBottom = theme.defaultHeightSpace, marginIsPercent }: StyledProps) =>
    marginIsPercent ? theme.heightPercentageToDP(marginBottom, marginBottom) : `${marginBottom}px`};

  margin-left: ${({ theme, marginLeft = theme.defaultWidthSpace, marginIsPercent }: StyledProps) =>
    marginIsPercent ? theme.widthPercentageToDP(marginLeft, marginLeft) : `${marginLeft}px`};

  margin-right: ${({ theme, marginRight = theme.defaultWidthSpace, marginIsPercent }: StyledProps) =>
    marginIsPercent ? theme.widthPercentageToDP(marginRight, marginRight) : `${marginRight}px`};

  margin-top: ${({ theme, marginTop = theme.defaultHeightSpace, marginIsPercent }: StyledProps) =>
    marginIsPercent ? theme.heightPercentageToDP(marginTop, marginTop) : `${marginTop}px`};
`;

export type MarginContainerPublicProps = {
  marginTop?: number | true;
  marginBottom?: number | true;
  marginLeft?: number | true;
  marginRight?: number | true;
  marginIsPercent?: boolean;
};

export type MarginContainerPrivateProps = MarginContainerPublicProps & {
  children: React.ReactNode;
};

const MarginContainer = ({
  children,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginIsPercent = true,
}: MarginContainerPrivateProps) => {
  return (
    <MarginView
      marginTop={marginTop === true ? undefined : marginTop}
      marginRight={marginRight === true ? undefined : marginRight}
      marginBottom={marginBottom === true ? undefined : marginBottom}
      marginLeft={marginLeft === true ? undefined : marginLeft}
      marginIsPercent={marginIsPercent}
    >
      {children}
    </MarginView>
  );
};

export default MarginContainer;
