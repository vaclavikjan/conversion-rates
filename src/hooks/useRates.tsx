import axios from 'axios';
import { useQuery } from 'react-query';

const getRates = async () => {
  const { data } = await axios.get(
    'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt',
  );

  return data;
};

export default function useRates() {
  return { rates: useQuery('rates', getRates) };
}
