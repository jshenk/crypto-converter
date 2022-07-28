import { useEffect, useState } from "react";

interface ExchangeRateResponse {
  code: string;
  name: string;
  rate: number;
}

const REFRESH_INTERVAL = 1000 * 60 * 2;

/**
 * Fetch crypto to currency coversion rate, and update on a 2 min interval
 * @param cryptoCurrency BCH
 * @param currency USD
 */
export const useExchangeRates = (
  cryptoCurrency: string,
  currency: string
): ExchangeRateResponse | undefined => {
  const [rate, setRate] = useState<undefined | ExchangeRateResponse>();
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://bitpay.com/api/rates/${cryptoCurrency}/${currency}`)
        .then((response) => response.json())
        .then((data) => setRate(data))
        .catch((error) => console.log(error));
    };

    const id = setInterval(() => {
      fetchData();
    }, REFRESH_INTERVAL);

    fetchData();

    return () => clearInterval(id);
  }, [cryptoCurrency, currency]);

  return rate;
};
