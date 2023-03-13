import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../../utilities/enums";
import { createAccount, fetchAccount, fetchAccounts } from "./action";
import { AccountsState } from "./types";

export const initialState: AccountsState = {
  isFetching: false,
  accounts: [],
  account: undefined,
}

export const accountSlice = createSlice({
  name: SLICE_NAME.ACCOUNTS,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get accounts
    builder.addCase(fetchAccounts.pending, (state, action) => {
      state.isFetching = true;
    })
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.isFetching = false;
      state.accounts = action.payload;
    })
    builder.addCase(fetchAccounts.rejected, (state, store) => {
      state.isFetching = false;
    })

    // Get account by id and userId
    builder.addCase(fetchAccount.pending, (state, _) => {
      state.isFetching = true;
    })
    builder.addCase(fetchAccount.fulfilled, (state, action) => {
      state.isFetching = false;
      state.account = action.payload;
    })
    builder.addCase(fetchAccount.rejected, (state, _) => {
      state.isFetching = false;
    })

    // Create account
    builder.addCase(createAccount.pending, (state, _) => {
      state.isFetching = true;
    })
    builder.addCase(createAccount.fulfilled, (state, _) => {
      state.isFetching = false;
    })
    builder.addCase(createAccount.rejected, (state, _) => {
      state.isFetching = false;
    })
  }
});

export const accountReducer = accountSlice.reducer