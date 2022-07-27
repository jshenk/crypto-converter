export interface MerchantTransaction {
  id: string;
  name: string;
  item: string;
  cryptoCurrencyForPayment: string;
  amountInvoicedAsCurrency: number;
  currencyCode: string;
}
