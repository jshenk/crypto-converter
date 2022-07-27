export const amountDueInCrypto = (
  amountInvoicedAsCurrency: number,
  currencyExchangeRate: number
) => {
  const totalCryptoDue = amountInvoicedAsCurrency / currencyExchangeRate;
  return totalCryptoDue.toFixed(8);
};
