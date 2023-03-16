export interface ActivityState {
  isFetching: boolean,
  activities: Activity[],
}

export interface Activity {
  accountId: string,
  transactionId: string,
  activityType: number,
  dateCreated: string,
}

export interface FetchActivitiesInput {
  accountId: string,
}