import React from 'react';
import { TextInputProps } from 'react-native';

import ExtraSmallText from '../text/text/ExtraSmallText';

type Props = TextInputProps & {
  error: string | any;
};

const FormError = ({ error }: Props) => {
  if (typeof error === 'string') {
    return (
      <ExtraSmallText marginIsPercent={false} marginTop={5} color="red">
        {error}
      </ExtraSmallText>
    );
  }

  return (
    <ExtraSmallText marginIsPercent={false} marginTop={5} color="red">
      {error.message}
    </ExtraSmallText>
  );
};

export default FormError;
