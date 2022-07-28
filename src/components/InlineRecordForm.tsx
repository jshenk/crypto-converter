import { bitpayAcceptedCrypto } from "../data/bitpayAcceptedCrypto";
import { MerchantTransaction } from "../models/MerchantTransaction";

interface InlineRecordFormProps extends MerchantTransaction {
  setViewState: (view: "display" | "edit") => void;
  handelEditRecord: any;
  id: string;
}

export const InlineRecordForm = ({
  setViewState,
  handelEditRecord,
  id,
  name,
  item,
  cryptoCurrencyForPayment,
  amountInvoicedAsCurrency,
}: InlineRecordFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        handelEditRecord(event);
        setViewState("display");
      }}
      id={id}
      className="grid grid-cols-8 items-center bg-neutral-50"
    >
      <div className={"p-3 text-sm text-gray-800"}>
        <input
          type="text"
          name={"name"}
          placeholder={name}
          className={"w-full py-1 px-2 rounded"}
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"item"}
          placeholder={item}
          className={"w-full py-1 px-2 rounded"}
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"amountInCrypto"}
          disabled
          className={"w-full py-1 px-2 rounded"}
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <select
          name={"cryptoCurrencyForPayment"}
          id="bitpay-crypto"
          className="w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs text-gray-800"
        >
          {bitpayAcceptedCrypto.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"priceInCurrency"}
          disabled
          className={"w-full py-1 px-2 rounded"}
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="number"
          name={"amountInvoicedAsCurrency"}
          placeholder={amountInvoicedAsCurrency.toString()}
          className={"w-full py-1 px-2 rounded"}
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <button
          type={"submit"}
          className="text-green-800 bg-green-50 p-2 rounded-full"
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
      <div className={"p-3 text-sm text-gray-800 "}>
        <button
          type={"button"}
          className={"p-2 text-gray-800 bg-gray-100 rounded-full"}
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
