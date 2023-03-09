import { TransactionType } from "../../enums/transactionType";

export interface TransactionState {
  isFetching: boolean,
  transactions: Transaction[],
  transaction?: Transaction,
}

export interface Transaction {
  id: string,
  transactionType: TransactionType,
  amount: number,
  dateTime: string,
}

export interface FetchTransactionsInput {
  accountId: string,
}