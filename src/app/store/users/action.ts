import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { USERS_API } from "../../utilities/constant";
import { LoginUserInput, RegisterUserInput, User } from "./types";

export const loginUser = createAsyncThunk<User, LoginUserInput>(
  "loginUser",
  async (user, thunkAPI) => {
    try {
      return await request.post(`${USERS_API}/login`, user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const registerUser = createAsyncThunk<boolean, RegisterUserInput>(
  "registerUser",
  async (user, thunkAPI) => {
    try {
      return await request.post(`${USERS_API}/register`, {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.userName,
        email: user.email,
        password: user.password,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<User>(
  "fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      return await request.get(USERS_API);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);