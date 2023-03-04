import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/agent";
import { Account, FetchAccountInput } from "./types";

export const fetchAccounts = createAsyncThunk<Account[]>(
  'fetchAccounts',
  async (_, thunkAPI) => {
    try {
      return await request.get('accounts');
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const fetchAccount = createAsyncThunk<Account, FetchAccountInput>(
  'fetchAccount',
  async (params, thunkAPI) => {
    try {
      return await request.get(`accounts/${params.id}`);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);