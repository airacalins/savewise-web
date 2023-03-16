import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { ACCOUNTS_API, CREATE_ACCOUNT_API, DELETE_ACCOUNT_API, GET_ACCOUNT_BY_ID_API, UPDATE_ACCOUNT_API } from "../../utilities/constant";
import { Account, CreateAccountInput, DeleteAccountInput, FetchAccountInput, UpdateAccountInput } from "./types";

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
  async (account, thunkAPI) => {
    const { id } = account;

    try {
      return await request.get(GET_ACCOUNT_BY_ID_API(id));
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const createAccount = createAsyncThunk<boolean, CreateAccountInput>(
  "createAccount",
  async (account, thunkAPI) => {
    const { title } = account;

    try {
      return await request.post(CREATE_ACCOUNT_API, { title: title });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const updateAccount = createAsyncThunk<boolean, UpdateAccountInput>(
  "updateAccount",
  async (account, thunkAPI) => {
    const { id, title } = account;
    try {
      return await request.put(UPDATE_ACCOUNT_API(id), { title: title });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const deleteAccount = createAsyncThunk<boolean, DeleteAccountInput>(
  "deleteAccount",
  async (account, thunkAPI) => {
    const { id } = account;

    try {
      return await request.del(DELETE_ACCOUNT_API(id));
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);