/**
 * Price in crypto based on item price and crypto rate
 * @param amountInvoicedAsCurrency
 * @param currencyExchangeRate
 */
export const amountDueInCrypto = (
  amountInvoicedAsCurrency: number,
  currencyExchangeRate: number
) => {
  const totalCryptoDue = amountInvoicedAsCurrency / currencyExchangeRate;
  return totalCryptoDue.toFixed(8);
};
