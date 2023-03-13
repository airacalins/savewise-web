export interface TransactionState {
  isFetching: boolean,
  transactions: Transaction[],
  transaction?: Transaction,
}

export interface Transaction {
  id: string,
  transactionType: number,
  amount: number,
  dateTime: string,
}

export interface FetchTransactionsInput {
  accountId: string,
}

export interface CreateTransactionInput {
  accountId: string,
  transactionType: number,
  amount: number,
  dateCreated: string,
}