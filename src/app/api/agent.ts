import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000/api';
const accountsPath = '/Accounts';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(response => {
  return response;
}, (error: AxiosError) => {
  const { data, status } = error.response as AxiosResponse;

  switch (status) {
    case 400:
      if (data.error) {
        const modalStateErrors = [];

        for (const key in data.errors) {
          if (data.errors[key]) {
            modalStateErrors.push(data.errors[key])
          }
        }

        throw modalStateErrors.flat();
      }
      break;
    case 401:
      toast.error('Unauthorized')
      break;
    case 403:
      toast.error('Forbidden')
      break;
    case 404:
      toast.error('Not Found')
      break;
    case 500:
      toast.error('Server Error')
      break;
  }

  return Promise.reject(error);
})

export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

// const Accounts = {
//   list: () => request.get<Account[]>(accountsPath),
//   details: (id: string) => request.get<Account>(`${accountsPath}/${id}`),
//   create: (account: CreateAccount) => request.post<void>(accountsPath, account),
//   update: (id: string, account: UpdateAccount) => request.put<void>(`${accountsPath}/${id}`, account),
//   delete: (id: string) => request.del<void>(`${accountsPath}/${id}`),
// }

// const agent = {
//   Accounts
// }

// export default agent;