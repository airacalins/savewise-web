import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { ACCOUNTS_API, ACCOUNT_BY_ID_API } from "../../utilities/constant";
import { Account, CreateAccountInput, FetchAccountInput } from "./types";

export const fetchAccounts = createAsyncThunk<Account[]>(
  "fetchAccounts",
  async (_, thunkAPI) => {
    try {
      return await request.get(ACCOUNTS_API);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const fetchAccount = createAsyncThunk<Account, FetchAccountInput>(
  "fetchAccount",
  async ({ id }, thunkAPI) => {
    try {
      return await request.get(ACCOUNT_BY_ID_API(id));
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const createAccount = createAsyncThunk<boolean, CreateAccountInput>(
  "createAccount",
  async ({ title }, thunkAPI) => {
    try {
      return await request.post(ACCOUNTS_API, { title: title });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);