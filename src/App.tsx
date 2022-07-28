import { useState } from "react";
import "./App.css";
import { CreateRecordForm } from "./components/CreateRecordForm";
import { Record } from "./components/Record";
import { merchantRecords } from "./data/merchantRecords";
import { MerchantTransaction } from "./models/MerchantTransaction";

function App() {
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
    console.log("event", event);
    event.preventDefault();
    const editedRecord = {
      name: event.target[0].value,
      item: event.target[1].value,
      cryptoCurrencyForPayment: event.target[3].value,
      amountInvoicedAsCurrency: event.target[5].value,
    };

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
    <div className="App bg-slate-100 min-h-screen">
      <div className="bg-slate-900 rounded m-3">
        <div className="mx-auto max-w-7xl py-20 px-4 text-left">
          <h1 className="text-4xl font-bold text-white">Merchant Records</h1>
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl bg-white rounded shadow mt-20">
        <div className={"grid grid-cols-8"}>
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
          <div className="text-xs uppercase text-gray-600 p-3 border-b">
            Actions
          </div>
          <div className="text-xs uppercase text-gray-600 p-3 border-b"></div>
        </div>
        <div>
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
          <div className="bg-indigo-50 border-t-4 border-indigo-800">
            <CreateRecordForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
