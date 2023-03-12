import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../../utilities/enums";
import { fetchTransactions } from "./action";
import { TransactionState } from "./types";

export const initialState: TransactionState = {
  isFetching: false,
  transactions: [],
  transaction: undefined
}

export const transactionSlice = createSlice({
  name: SLICE_NAME.TRANSACTIONS,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all the transactions
    builder.addCase(fetchTransactions.pending, (state, _) => {
      state.isFetching = true;
    })
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.isFetching = false;
      state.transactions = action.payload;
    })
    builder.addCase(fetchTransactions.rejected, (state, _) => {
      state.isFetching = false;
    })
  }
})

export const transactionReducer = transactionSlice.reducer;