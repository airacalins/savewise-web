import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { USERS_API } from "../../utilities/constant";
import { LoginUserInput, RegisterUserInput, User } from "./types";

export const loginUser = createAsyncThunk<User, LoginUserInput>(
  "loginUser",
  async (params, thunkAPI) => {
    try {
      return await request.post(`${USERS_API}/login`, params);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const registerUser = createAsyncThunk<boolean, RegisterUserInput>(
  "registerUser",
  async (params, thunkAPI) => {
    try {
      return await request.post(`${USERS_API}/register`, {
        firstName: params.firstName,
        lastName: params.lastName,
        username: params.userName,
        email: params.email,
        password: params.password,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<boolean>(
  "fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      return await request.get(USERS_API);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);