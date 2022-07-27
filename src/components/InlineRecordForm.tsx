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
      className="flex items-center"
    >
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <input
          type="text"
          name={"name"}
          placeholder={name}
          className={"w-full py-1 px-2 rounded"}
          required
        />
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <input
          type="text"
          name={"item"}
          placeholder={item}
          className={"w-full py-1 px-2 rounded"}
          required
        />
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <input
          type="text"
          name={"amountInCrypto"}
          disabled
          className={"w-full py-1 px-2 rounded"}
        />
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <input
          type="text"
          name={"currency"}
          placeholder={cryptoCurrencyForPayment}
          className={"w-full py-1 px-2 rounded"}
          required
        />
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <input
          type="text"
          name={"priceInCurrency"}
          disabled
          className={"w-full py-1 px-2 rounded"}
        />
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <input
          type="number"
          name={"amountInCurrency"}
          placeholder={amountInvoicedAsCurrency.toString()}
          className={"w-full py-1 px-2 rounded"}
          required
        />
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <button
          type={"submit"}
          className="text-green-800 bg-green-50 p-2 rounded-full"
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
      <td className={"p-3 text-sm text-gray-800 min-w-[160px]"}>
        <button
          type={"button"}
          className={"p-2 text-gray-800 bg-gray-100 rounded-full"}
          onClick={() => setViewState("display")}
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
    </form>
  );
};
