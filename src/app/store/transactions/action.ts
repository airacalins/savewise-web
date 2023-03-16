import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { CREATE_TRANSACTIONS_API, DELETE_TRANSACTIONS_API, TRANSACTIONS_API, UPDATE_TRANSACTIONS_API } from "../../utilities/constant";
import { CreateTransactionInput, DeleteTransactionInput, FetchTransactionsInput, Transaction, UpdateTransactionInput } from "./types";

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
    const { accountId, transactionType, amount, dateCreated, } = transaction;

    try {
      return await request.post(CREATE_TRANSACTIONS_API(accountId), {
        transactionType: transactionType,
        amount: amount,
        dateCreated: dateCreated,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)

export const updateTransaction = createAsyncThunk<boolean, UpdateTransactionInput>(
  "updateTransaction",
  async (transaction, thunkAPI) => {
    const { accountId, id, transactionType, amount, dateCreated, } = transaction;

    try {
      return await request.put(UPDATE_TRANSACTIONS_API(accountId, id), {
        transactionType: transactionType,
        amount: amount,
        dateCreated: dateCreated,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)

export const deleteTransaction = createAsyncThunk<boolean, DeleteTransactionInput>(
  "deleteTransaction",
  async (transaction, thunkAPI) => {
    const { accountId, id } = transaction;

    try {
      return await request.del(DELETE_TRANSACTIONS_API(accountId, id));
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)