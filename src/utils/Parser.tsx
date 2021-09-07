import { IRate } from '../types/entities';

function parseRatesResponse(data: string): Array<IRate> {
  const parsedArray: Array<IRate> = [];
  const rows = data.split(/\r\n|\n\r|\n|\r/).slice(2);

  rows.forEach((row) => {
    const rowParts = row.split('|');
    if (rowParts.length === 5) {
      parsedArray.push({
        country: rowParts[0],
        currency: rowParts[1],
        quantity: parseInt(rowParts[2], 10) || 0,
        code: rowParts[3],
        rate: parseFloat(rowParts[4].replace(',', '.')) || 0,
      });
    }
  });

  return parsedArray;
}

export default { parseRatesResponse };
