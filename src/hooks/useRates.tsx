import axios from 'axios';
import { useQuery } from 'react-query';

import { IRate } from '../types/entities';
import Parser from '../utils/Parser';

const getRates = async (): Promise<Array<IRate>> => {
  const { data } = await axios.get(
    'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt',
  );

  return Parser.parseRatesResponse(data);
};

export default function useRates() {
  return useQuery('rates', getRates);
}
