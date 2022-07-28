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
    <div className="App">
      <div className="bg-slate-900 rounded m-3">
        <div className="mx-auto max-w-7xl py-20 px-4 text-left">
          <h1 className="text-4xl font-bold text-white">Merchant Records</h1>
        </div>
      </div>
      <div className="bg-slate-100 py-20 rounded m-3 min-h-screen overflow-x-auto">
        <table className="table-fixed w-full mx-auto max-w-7xl bg-white p-3 rounded shadow ">
          <thead className="text-left">
            <tr>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Merchant
              </th>

              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Item
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Amount (Crypto)
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Currency
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Price/crypto (USD)
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Amount (USD)
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Actions
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b"></th>
            </tr>
          </thead>
          <tbody>
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
            <tr className="bg-indigo-50 border-t-4 border-indigo-800">
              <td colSpan={8}>
                <CreateRecordForm handleSubmit={handleSubmit} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
