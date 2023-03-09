import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { ACCOUNTS_API, TRANSACTIONS_API } from "../../utilities/constant";
import { FetchTransactionsInput, Transaction } from "./types";

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