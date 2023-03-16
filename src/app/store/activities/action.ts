import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/api";
import { ACTIVITIES_API } from "../../utilities/constant";
import { Activity, FetchActivitiesInput } from "./types";

export const fetchActivities = createAsyncThunk<Activity[], FetchActivitiesInput>(
  "fetchActivities",
  async (activities, thunkAPI) => {
    const { accountId } = activities;

    try {
      return await request.get(ACTIVITIES_API(accountId));
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);