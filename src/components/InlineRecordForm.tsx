import { bitpayAcceptedCrypto } from "../data/bitpayAcceptedCrypto";
import { MerchantTransaction } from "../models/MerchantTransaction";
import { useFormik } from "formik";

interface InlineRecordFormProps extends MerchantTransaction {
  setViewState: (view: "display" | "edit") => void;
  id: string;
  setRecords: any;
}

/** Edit a single merchant record. */
export const InlineRecordForm = ({
  setViewState,
  id,
  name,
  item,
  cryptoCurrencyForPayment,
  amountInvoicedAsCurrency,
  setRecords,
}: InlineRecordFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: name,
      item: item,
      cryptoCurrencyForPayment: cryptoCurrencyForPayment,
      amountInvoicedAsCurrency: amountInvoicedAsCurrency,
    },
    onSubmit: (values) => {
      setRecords((currenRecords: any[]) =>
        currenRecords.map((currentRecord: { id: string }) => {
          if (currentRecord.id === id) {
            return { ...currentRecord, ...values };
          }

          return currentRecord;
        })
      );
      setViewState("display");
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      id={id}
      className="grid grid-cols-8 items-center bg-neutral-200"
    >
      <div className="p-3 text-sm text-gray-800">
        <input
          type="text"
          name="name"
          placeholder={name}
          className="w-full py-1 px-2 rounded"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      <div className="p-3 text-sm text-gray-800 ">
        <input
          type="text"
          name="item"
          placeholder={item}
          value={formik.values.item}
          onChange={formik.handleChange}
          className="w-full py-1 px-2 rounded"
        />
      </div>
      <div className="p-3 text-sm text-gray-800">
        <input
          type="text"
          name="amountInCrypto"
          disabled
          className="w-full py-1 px-2 rounded bg-neutral-300"
        />
      </div>
      <div className="p-3 text-sm text-gray-800">
        <select
          name="cryptoCurrencyForPayment"
          id="bitpay-crypto"
          className="w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs text-gray-800"
          defaultValue={formik.values.cryptoCurrencyForPayment}
          onChange={formik.handleChange}
        >
          {bitpayAcceptedCrypto.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className="p-3 text-sm text-gray-800">
        <input
          type="text"
          name="priceInCurrency"
          disabled
          className="w-full py-1 px-2 rounded bg-neutral-300"
        />
      </div>
      <div className="p-3 text-sm text-gray-800 ">
        <input
          type="number"
          name="amountInvoicedAsCurrency"
          className="w-full py-1 px-2 rounded"
          value={formik.values.amountInvoicedAsCurrency}
          onChange={formik.handleChange}
        />
      </div>
      <div className="p-3 text-sm text-gray-800">
        <button
          type="submit"
          className="text-green-800 bg-green-50 p-2 rounded-full hover:bg-white transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-3 text-sm text-gray-800">
        <button
          type="button"
          className="p-2 text-gray-800 bg-gray-50 rounded-full hover:bg-white transition-all"
          onClick={() => setViewState("display")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
