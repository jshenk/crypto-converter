import React, { useState } from "react";
import { merchantRecords } from "../data/merchantRecords";
import { MerchantTransaction } from "../models/MerchantTransaction";
import { CreateRecordForm } from "./CreateRecordForm";
import { Record } from "./Record";

export const RecordTable = () => {
  const [records, setRecords] =
    useState<MerchantTransaction[]>(merchantRecords);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newRecord = {
      id: "id" + new Date().getTime(),
      name: event.target[0].value,
      item: event.target[1].value,
      cryptoCurrencyForPayment: event.target[3].value,
      amountInvoicedAsCurrency: event.target[5].value,
      currencyCode: "USD",
    };
    setRecords([...records, newRecord]);
  };

  const deleteRecord = (id: string) => {
    const filteredRecords: MerchantTransaction[] = records.filter(
      (item: { id: string }) => id !== item.id
    );
    setRecords(filteredRecords);
  };

  const handelEditRecord = (event: any) => {
    event.preventDefault();

    const inputs = event.target.elements;
    const name = inputs[0].value;
    const item = inputs[1].value;
    const cryptoCurrencyForPayment = inputs[3].value;
    const amountInvoicedAsCurrency = inputs[5].value;

    let editedRecord: any = {};
    if (name) editedRecord.name = name;
    if (item) editedRecord.item = item;
    if (cryptoCurrencyForPayment != "")
      editedRecord.cryptoCurrencyForPayment = cryptoCurrencyForPayment;
    if (amountInvoicedAsCurrency != "")
      editedRecord.amountInvoicedAsCurrency = amountInvoicedAsCurrency;

    setRecords((currenRecords) =>
      currenRecords.map((currentRecord) => {
        if (currentRecord.id === event.target.id) {
          return { ...currentRecord, ...editedRecord };
        }

        return currentRecord;
      })
    );
  };

  return (
    <div className="mt-10 lg:mt-20 mx-3 overflow-x-auto">
      <div
        className={
          "bg-white rounded shadow max-w-7xl mx-auto min-w-[1280px] lg:min-w-0"
        }
      >
        <div className={"grid grid-cols-8 items-center"}>
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
            Price/crypto (USD)
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Amount (USD)
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
              currencyCode,
            }) => {
              return (
                <Record
                  key={id}
                  id={id}
                  name={name}
                  item={item}
                  cryptoCurrencyForPayment={cryptoCurrencyForPayment}
                  amountInvoicedAsCurrency={amountInvoicedAsCurrency}
                  deleteRecord={deleteRecord}
                  handelEditRecord={handelEditRecord}
                  currencyCode={currencyCode}
                />
              );
            }
          )}
        <CreateRecordForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
