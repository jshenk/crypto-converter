/**
 * Format as dollar amount based on selected currency.
 * @param currencyCode USD, GBP, ect.
 * @param amount 30000
 */
export const currencyFormatter = (currencyCode: string, amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};
