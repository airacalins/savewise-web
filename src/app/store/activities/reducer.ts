import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../../utilities/enums";
import { fetchActivities } from "./action";
import { ActivityState } from "./types";

export const initialState: ActivityState = {
  isFetching: false,
  activities: [],
}

export const activitySlice = createSlice({
  name: SLICE_NAME.ACTIVITIES,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all the activities
    builder.addCase(fetchActivities.pending, (state, _) => {
      state.isFetching = true;
    })
    builder.addCase(fetchActivities.fulfilled, (state, action) => {
      state.isFetching = false;
      state.activities = action.payload;
    })
    builder.addCase(fetchActivities.rejected, (state, _) => {
      state.isFetching = false;
    })
  }
})

export const activityReducer = activitySlice.reducer;