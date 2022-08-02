import { MerchantTransaction } from "./MerchantTransaction";

export interface ChangeRecords {
  records: MerchantTransaction[];
  setRecords: (record: MerchantTransaction[]) => void;
}
