import { bitpayAcceptedCrypto } from "../data/bitpayAcceptedCrypto";
import { useFormik } from "formik";
import { MerchantTransaction } from "../models/MerchantTransaction";

interface CreateRecordFormProps {
  records: MerchantTransaction[];
  setRecords: (record: MerchantTransaction[]) => void;
  currency: string;
}

/** Add new record to merchant record database. */
export const CreateRecordForm = ({
  records,
  setRecords,
  currency,
}: CreateRecordFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      item: "",
      cryptoCurrencyForPayment: "BTC",
      amountInvoicedAsCurrency: 0,
    },
    onSubmit: (values, { resetForm }) => {
      const id = { id: "id" + new Date().getTime() };
      const currencyCode = { currencyCode: currency };
      setRecords([...records, { ...id, ...currencyCode, ...values }]);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-8 items-center bg-indigo-100 border-t-4 border-indigo-800"
    >
      <div className="p-3 text-sm text-gray-800 ">
        <input
          type="text"
          name="name"
          placeholder="Merchant"
          className={
            "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
          }
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="p-3 text-sm text-gray-800 ">
        <input
          type="text"
          name="item"
          placeholder="Item"
          className={
            "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
          }
          required
          onChange={formik.handleChange}
          value={formik.values.item}
        />
      </div>
      <div className="p-3 text-sm text-gray-800 ">
        <input
          type="text"
          name="amountInCrypto"
          disabled
          className="w-full py-1 px-2 rounded bg-indigo-200"
        />
      </div>
      <div className="p-3 text-sm text-gray-800">
        <select
          name={"cryptoCurrencyForPayment"}
          id="bitpay-crypto"
          className="w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs text-gray-800"
          onChange={formik.handleChange}
          value={formik.values.cryptoCurrencyForPayment}
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
      <div className="p-3 text-sm text-gray-800 ">
        <input
          type="text"
          name="priceInCurrency"
          disabled
          className="w-full py-1 px-2 rounded bg-indigo-200"
        />
      </div>

      <div className="p-3 text-sm text-gray-800 col-span-2 max-w-[140px]">
        <input
          type="number"
          name="amountInvoicedAsCurrency"
          placeholder="Amount"
          className={
            "py-1 px-2 rounded placeholder:uppercase placeholder:text-xs w-full"
          }
          required
          onChange={formik.handleChange}
          value={formik.values.amountInvoicedAsCurrency}
        />
      </div>
      <div className="py-3 px-4 text-sm text-gray-800 ">
        <button
          type="submit"
          className="text-indigo-800 bg-indigo-50 p-2 rounded-full hover:bg-white transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
