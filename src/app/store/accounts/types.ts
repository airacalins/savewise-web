export interface AccountsState {
  isFetching: boolean,
  accounts: Account[],
  account?: Account,
}

export interface Account {
  id: string,
  title: string,
  balance: number,
  dateCreated: string,
}

export interface FetchAccountInput {
  id: string,
}

export interface CreateAccountInput {
  title: string,
}

export interface UpdateAccountInput {
  id: string,
  title: string,
}

export interface DeleteAccountInput {
  id: string,
}
