interface CreateRecordFormProps {
  handleSubmit: (event: any) => void;
}

export const CreateRecordForm = ({ handleSubmit }: CreateRecordFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-8">
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"name"}
          placeholder={"Merchant"}
          className={
            "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
          }
          required
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"item"}
          placeholder={"Item"}
          className={
            "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
          }
        />
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"amountInCrypto"}
          disabled
          className={"w-full py-1 px-2 rounded bg-indigo-50"}
        />
      </div>
      <div className={"p-3 text-sm text-gray-800"}>
        <select
          id="bitpay-crypto"
          className="w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs text-gray-800"
        >
          <option value="BTC">BTC</option>
          <option value="BCH">BCH</option>
          <option value="ETH">ETH</option>
          <option value="WBTC">WBTC</option>
          <option value="LTC">LTC</option>
          <option value="DOGE">DOGE</option>
          <option value="SHIB">SHIB</option>
          <option value="DOGE">DOGE</option>
        </select>
      </div>
      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="text"
          name={"priceInCurrency"}
          disabled
          className={"w-full py-1 px-2 rounded bg-indigo-50"}
        />
      </div>

      <div className={"p-3 text-sm text-gray-800 "}>
        <input
          type="number"
          name={"amountInCurrency"}
          placeholder={"Amount (USD)"}
          className={
            "w-full py-1 px-2 rounded placeholder:uppercase placeholder:text-xs"
          }
          required
        />
      </div>
      <div className={""}></div>
      <div className={"py-3 px-4 text-sm text-gray-800 "}>
        <button
          type={"submit"}
          className="text-blue-800 bg-blue-100 p-2 rounded-full"
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
