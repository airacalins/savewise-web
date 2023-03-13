import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { CREATE_TRANSACTIONS_API, TRANSACTIONS_API } from "../../utilities/constant";
import { CreateTransactionInput, FetchTransactionsInput, Transaction } from "./types";

export const fetchTransactions = createAsyncThunk<Transaction[], FetchTransactionsInput>(
  "fetchTransactions",
  async ({ accountId }, thunkAPI) => {
    try {
      return await request.get(TRANSACTIONS_API(accountId));
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)

export const createTransaction = createAsyncThunk<boolean, CreateTransactionInput>(
  "createTransaction",
  async (transaction, thunkAPI) => {
    try {
      return await request.post(CREATE_TRANSACTIONS_API(transaction.accountId), {
        transactionType: transaction.transactionType,
        amount: transaction.amount,
        dateCreated: transaction.dateCreated,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)