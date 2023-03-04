// APIs
export const ACTIVITIES_API = 'activities';
export const ACCOUNTS_API = 'accounts';
export const TRANSACTIONS_API = (accountId: string) => `accounts/${accountId}/transactions`;