import React from 'react';
import { ImagePropsBase, ImageSourcePropType } from 'react-native';

import styled from '../../../styles/styled';

type ImageProps = {
  opacity?: number;
  width: number;
  height: number;
  isPercent?: boolean;
  isWidthPercent?: boolean;
  isHeightPercent?: boolean;
};

const Image = styled.Image`
  height: ${({ height, isPercent, isHeightPercent }: ImageProps) =>
    isPercent || isHeightPercent ? `${height}%` : `${height}px`};

  opacity: ${({ opacity }: ImageProps) => opacity || 1};

  width: ${({ width, isPercent, isWidthPercent }: ImageProps) =>
    isPercent || isWidthPercent ? `${width}%` : `${width}px`};
`;

export type BasicImagePublicProps = ImageProps &
  ImagePropsBase & {
    source: ImageSourcePropType;
  };

type BasicImagePrivateProps = BasicImagePublicProps & {};

const BasicImage = ({ source, ...props }: BasicImagePrivateProps) => {
  return <Image source={typeof source === 'object' ? { cache: 'force-cache', ...source } : source} {...props} />;
};

export default BasicImage;
