import { bitpaySettlementCurrencies } from "../data/bitpaySettlementCurrencies";

interface CurrencySelectorProps {
  currency: string;
  setCurrency: (currency: string) => void;
}

export const CurrencySelector = ({
  currency,
  setCurrency,
}: CurrencySelectorProps) => {
  return (
    <div className="mb-5 flex flex-col items-start">
      <label
        htmlFor="currency"
        className="text-xs uppercase text-gray-600 py-3"
      >
        Select Currency
      </label>
      <select
        defaultValue={currency}
        onChange={(event) => setCurrency(event.target.value)}
        className="py-1 px-2 rounded text-sm text-gray-800"
      >
        {bitpaySettlementCurrencies.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};
