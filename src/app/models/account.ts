export interface Account {
  id: string
  title: string
  balance: number
  dateCreated: string
}

export interface CreateAccount {
  title: string
}

export interface UpdateAccount {
  title: string
}