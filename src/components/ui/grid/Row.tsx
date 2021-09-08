import React from 'react';

import styled from '../../../styles/styled';
import MarginSpacingHOC, { MarginSpacingHOCProps } from '../spacings/MarginSpacingHOC';

type RowViewProps = {
  alignCenter: boolean;
  center: boolean;
  column: boolean;
  stretch: boolean;
  toRight: boolean;
  nowrap: boolean;
  autoWidth: boolean;
  autoHeight: boolean;
};

const RowView = styled.View`
  align-items: ${({ alignCenter }: RowViewProps) => (alignCenter ? 'center' : 'flex-start')};
  flex-direction: ${({ column }: RowViewProps) => (column ? 'column' : 'row')};
  flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
  justify-content: ${({ stretch, toRight, center }: RowViewProps) => {
    if (stretch) {
      return 'space-between';
    }

    if (toRight) {
      return 'flex-end';
    }

    if (center) {
      return 'center';
    }

    return 'flex-start';
  }};
  ${({ autoHeight }: RowViewProps) => (autoHeight ? '' : 'height: 100%;')}
  ${({ autoWidth }: RowViewProps) => (autoWidth ? '' : 'width: 100%;')}
`;

type RowPublicProps = MarginSpacingHOCProps & {
  children: React.ReactNode;
  alignCenter?: boolean;
  center?: boolean;
  stretch?: boolean;
  column?: boolean;
  right?: boolean;
  nowrap?: boolean;
  autoWidth?: boolean;
  autoHeight?: boolean;
};

type RowPrivateProps = RowPublicProps & {};

const Row = ({
  children,
  alignCenter = false,
  center = false,
  stretch = false,
  column = false,
  right = false,
  nowrap = false,
  autoWidth = false,
  autoHeight = true,
}: RowPublicProps) => {
  return (
    <RowView
      alignCenter={alignCenter}
      center={center}
      stretch={stretch}
      column={column}
      toRight={right}
      nowrap={nowrap}
      autoWidth={autoWidth}
      autoHeight={autoHeight}
    >
      {children}
    </RowView>
  );
};

export default MarginSpacingHOC<RowPrivateProps>(Row);
