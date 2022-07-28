import { FormEvent, useState } from "react";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { MerchantTransaction } from "../models/MerchantTransaction";
import { amountDueInCrypto } from "../utils/amountDueInCrypto";
import { currencyFormatter } from "../utils/currencyFormatter";
import { InlineRecordForm } from "./InlineRecordForm";

interface RecordProps extends MerchantTransaction {
  deleteRecord: (id: string) => void;
  handelEditRecord: (event: FormEvent<HTMLFormElement>) => void;
}

/** Displays a merchant item's cost in both regularl currency and cryptocurrency. */
export const Record = ({
  id,
  name,
  item,
  cryptoCurrencyForPayment,
  amountInvoicedAsCurrency,
  deleteRecord,
  handelEditRecord,
  currencyCode,
}: RecordProps) => {
  const [viewState, setViewState] = useState<"display" | "edit">("display");

  const currencyExchnageRate = useExchangeRates(
    cryptoCurrencyForPayment,
    currencyCode
  );

  const fetchClass = currencyExchnageRate === null ? "bg-red-50" : "bg-white";

  return (
    <>
      {viewState === "display" && (
        <div className={`grid grid-cols-8 items-center ` + fetchClass}>
          <div className="p-3 text-sm text-gray-800">{name}</div>
          <div className="p-3 text-sm text-gray-800">{item}</div>
          <div className="p-3 text-sm text-gray-800">
            {currencyExchnageRate &&
              amountDueInCrypto(
                amountInvoicedAsCurrency,
                currencyExchnageRate.rate
              )}
            {currencyExchnageRate === null && (
              <p className="text-red-600">ERROR: Unable to fetch conversion.</p>
            )}
          </div>
          <div className="p-3 text-sm text-gray-800">
            {cryptoCurrencyForPayment}
          </div>
          <div className="p-3 text-sm text-gray-800">
            {currencyExchnageRate &&
              currencyFormatter(currencyCode, currencyExchnageRate.rate)}
            {currencyExchnageRate === null && (
              <p className="text-red-600">ERROR: Unable to fetch conversion.</p>
            )}
          </div>
          <div className="p-3 text-sm text-gray-800">
            {currencyFormatter(currencyCode, amountInvoicedAsCurrency)}
          </div>
          <div className="p-3 text-sm text-gray-800">
            <button
              type="button"
              className="p-2 text-red-500 bg-red-50 rounded-full border-red-50 hover:bg-red-100 transition-all"
              onClick={() => deleteRecord(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-3">
            <button
              type="button"
              className="p-2 text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
              onClick={() => setViewState("edit")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {viewState === "edit" && (
        <InlineRecordForm
          key={id}
          id={id}
          setViewState={setViewState}
          handelEditRecord={handelEditRecord}
          name={name}
          item={item}
          cryptoCurrencyForPayment={cryptoCurrencyForPayment}
          amountInvoicedAsCurrency={amountInvoicedAsCurrency}
          currencyCode={currencyCode}
        />
      )}
    </>
  );
};
