export const currencyFormatter = (currencyCode: string, amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};
