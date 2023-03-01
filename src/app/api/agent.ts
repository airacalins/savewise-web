import axios, { AxiosResponse } from 'axios';
import { Account, CreateAccount, UpdateAccount } from '../models/account';

axios.defaults.baseURL = 'http://localhost:5000/api';
const accountsPath = '/Accounts';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Accounts = {
  list: () => request.get<Account[]>(accountsPath),
  details: (id: string) => request.get<Account>(`${accountsPath}/${id}`),
  create: (account: CreateAccount) => request.post<void>(accountsPath, account),
  update: (id: string, account: UpdateAccount) => request.put<void>(`${accountsPath}/${id}`, account),
  delete: (id: string) => request.del<void>(`${accountsPath}/${id}`),
}

const agent = {
  Accounts
}

export default agent;