import React, { useState } from "react";
import { merchantRecords } from "../data/merchantRecords";
import { MerchantTransaction } from "../models/MerchantTransaction";
import { CreateRecordForm } from "./CreateRecordForm";
import { CurrencySelector } from "./CurrencySelector";
import { Record } from "./Record";

/** Displays a full list of merchant records, that can be added to, updated, or deleted at the record level. */
export const RecordTable = () => {
  const [currency, setCurrency] = useState("USD");
  const [records, setRecords] =
    useState<MerchantTransaction[]>(merchantRecords);

  return (
    <div className="mt-5 lg:mt-5 px-3 overflow-x-auto max-w-7xl mx-auto">
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <div className="bg-white rounded shadow  min-w-[1280px] lg:min-w-0">
        <div className="grid grid-cols-8 items-center">
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Merchant
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Item
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Amount (Crypto)
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Currency
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Price/crypto ({currency})
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Amount ({currency})
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b col-span-2">
            Actions
          </div>
        </div>
        {records &&
          records.map(
            ({
              id,
              name,
              item,
              cryptoCurrencyForPayment,
              amountInvoicedAsCurrency,
            }) => {
              return (
                <Record
                  key={id}
                  id={id}
                  name={name}
                  item={item}
                  cryptoCurrencyForPayment={cryptoCurrencyForPayment}
                  amountInvoicedAsCurrency={amountInvoicedAsCurrency}
                  records={records}
                  setRecords={setRecords}
                  currencyCode={currency}
                />
              );
            }
          )}
        <CreateRecordForm
          records={records}
          setRecords={setRecords}
          currency={currency}
        />
      </div>
    </div>
  );
};
