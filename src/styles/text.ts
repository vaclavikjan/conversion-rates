import { Platform } from 'react-native';

const fontSizes = {
  extraLarge: 36,
  large: 20,
  normal: 17,
  small: 15,
  extraSmall: 13,
  mini: 11,
};

const font = {
  bold: Platform.OS === 'android' ? 'montserrat_bold' : 'Montserrat-Bold',
  semibold: Platform.OS === 'android' ? 'montserrat_semibold' : 'Montserrat-Semibold',
  medium: Platform.OS === 'android' ? 'montserrat_medium' : 'Montserrat-Medium',
  regular: Platform.OS === 'android' ? 'montserrat_regular' : 'Montserrat-Regular',
};

export { fontSizes, font };
