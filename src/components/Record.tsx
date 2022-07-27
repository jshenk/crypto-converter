import { useState } from "react";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { MerchantTransaction } from "../models/MerchantTransaction";
import { amountDueInCrypto } from "../utils/amountDueInCrypto";
import { currencyFormatter } from "../utils/currencyFormatter";
import { InlineRecordForm } from "./InlineRecordForm";

interface RecordProps extends MerchantTransaction {
  deleteRecord: (id: string) => void;
  handelEditRecord: (event: any) => void;
}

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
  const currencyExchnageRate = useExchangeRates(
    cryptoCurrencyForPayment,
    currencyCode
  );

  const [viewState, setViewState] = useState<"display" | "edit">("display");

  return (
    <tr>
      {viewState === "display" && (
        <>
          <td className={"p-3 text-sm text-gray-800"}>{name}</td>
          <td className={"p-3 text-sm text-gray-800"}>{item}</td>
          <td className={"p-3 text-sm text-gray-800"}>
            {currencyExchnageRate
              ? amountDueInCrypto(
                  amountInvoicedAsCurrency,
                  currencyExchnageRate.rate
                )
              : 0}
          </td>
          <td className={"p-3 text-sm text-gray-800"}>
            {cryptoCurrencyForPayment}
          </td>
          <td className={"p-3 text-sm text-gray-800"}>
            {currencyExchnageRate
              ? currencyFormatter(currencyCode, currencyExchnageRate.rate)
              : 0.0}
          </td>
          <td className={"p-3 text-sm text-gray-800"}>
            {currencyFormatter(currencyCode, amountInvoicedAsCurrency)}
          </td>
          <td className={"p-3 text-sm text-gray-800"}>
            <button
              type={"button"}
              className={"p-2 text-red-500 bg-red-50 rounded-full"}
              onClick={() => deleteRecord(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
          <td className={"p-3"}>
            <button
              type={"button"}
              className={"p-2 text-gray-800 bg-gray-100 rounded-full"}
              onClick={() => setViewState("edit")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </td>
        </>
      )}
      {viewState === "edit" && (
        <tr className="bg-neutral-50">
          <td colSpan={8}>
            <InlineRecordForm
              id={id}
              setViewState={setViewState}
              handelEditRecord={handelEditRecord}
              name={name}
              item={item}
              cryptoCurrencyForPayment={cryptoCurrencyForPayment}
              amountInvoicedAsCurrency={amountInvoicedAsCurrency}
              currencyCode={currencyCode}
            />
          </td>
        </tr>
      )}
    </tr>
  );
};
