import { NavigationPath } from "../models/navigation_path";
import { PATH_NAME } from "./enums";

// App
export const APP_BASE_URL = "http://localhost:5000/api";
export const APP_NAME = "SaveWise";

// APIs
export const ACTIVITIES_API = "activities";
export const ACCOUNTS_API = "accounts";
export const TRANSACTIONS_API = (accountId: string) => `accounts/${accountId}/transactions`;
export const USERS_API = "users";

// String Constants
export const ACCOUNTS = "Accounts";
export const CONFIRM_PASSWORD = "Confirm Password";
export const EMAIL_ADDRESS = "Email Address";
export const EMPTY_STRING = "";
export const FIRSTNAME = "First Name";
export const HOME = "Home";
export const LASTNAME = "Last Name";
export const LOGIN = "Login";
export const LOGIN_MESSAGE = "Don't have an account?";
export const PASSWORD = "Password";
export const REGISTER = "Register";
export const REGISTER_MESSAGE = "Already have an account?";
export const SIGN_IN = "Sign In";
export const SIGN_UP = "Sign Up";
export const TRANSACTIONS = "Transactions";
export const USERNAME = "Username";

// Navigation
export const navigationPaths: NavigationPath[] = [
  {
    title: HOME,
    path: PATH_NAME.HOME,
  },
  {
    title: ACCOUNTS,
    path: PATH_NAME.ACCOUNT,
  },
  {
    title: TRANSACTIONS,
    path: PATH_NAME.TRANSACTION,
  },
]