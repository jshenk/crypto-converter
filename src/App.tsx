import { useState } from "react";
import "./App.css";
import { Record } from "./components/Record";
import { merchantRecords } from "./data/merchantRecords";
import { MerchantTransaction } from "./models/MerchantTransaction";

function App() {
  const [records, setRecords] =
    useState<MerchantTransaction[]>(merchantRecords);

  const handleSubmit = (event: any) => {
    console.log("event", event);
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
    const editedRecord = {
      name: event.target[0].value,
      item: event.target[1].value,
      cryptoCurrencyForPayment: event.target[3].value,
      amountInvoicedAsCurrency: event.target[5].value,
    };
    console.log("editedRecord", editedRecord);
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
      <div className="bg-slate-100 py-20 rounded m-3 min-h-screen">
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
                Delete
              </th>
              <th className="text-xs uppercase text-gray-600 p-3 border-b">
                Edit
              </th>
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
                <form onSubmit={handleSubmit} className="flex items-center">
                  <td className={"p-3 text-sm text-gray-800 max-w-[160px]"}>
                    <input
                      type="text"
                      name={"name"}
                      placeholder={"Merchant"}
                      className={
                        "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
                      }
                      required
                    />
                  </td>
                  <td className={"p-3 text-sm text-gray-800 max-w-[160px]"}>
                    <input
                      type="text"
                      name={"item"}
                      placeholder={"Item"}
                      className={
                        "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
                      }
                    />
                  </td>
                  <td className={"p-3 text-sm text-gray-800 max-w-[160px]"}>
                    <input
                      type="text"
                      name={"amountInCrypto"}
                      disabled
                      className={"w-full py-1 px-2 rounded bg-indigo-50"}
                    />
                  </td>
                  <td className={"p-3 text-sm text-gray-800 max-w-[160px]"}>
                    <input
                      type="text"
                      name={"currency"}
                      placeholder={"Currency"}
                      className={
                        "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
                      }
                      required
                    />
                  </td>
                  <td className={"p-3 text-sm text-gray-800 max-w-[160px]"}>
                    <input
                      type="text"
                      name={"priceInCurrency"}
                      disabled
                      className={"w-full py-1 px-2 rounded bg-indigo-50"}
                    />
                  </td>

                  <td className={"p-3 text-sm text-gray-800 max-w-[160px]"}>
                    <input
                      type="number"
                      name={"amountInCurrency"}
                      placeholder={"Amount (USD)"}
                      className={
                        "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
                      }
                      required
                    />
                  </td>
                  <td className={"min-w-[160px]"}></td>
                  <td
                    className={"py-3 px-4 text-sm text-gray-800 max-w-[160px]"}
                  >
                    <button
                      type={"submit"}
                      className="text-blue-800 bg-blue-100 p-2 rounded-full"
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
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </td>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
