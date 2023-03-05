import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../../utilities/enums";
import { loginUser } from "./action";
import { UsersState } from "./types";

export const initialState: UsersState = {
  isFetching: false,
  user: undefined
}

export const userSlice = createSlice({
  name: SLICE_NAME.USERS,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login user
    builder.addCase(loginUser.pending, (state, action) => {
      state.isFetching = true;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    })
    builder.addCase(loginUser.rejected, (state, store) => {
      state.isFetching = false;
    })
  }
});

export const userReducer = userSlice.reducer;