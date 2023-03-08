import { NavigationPath } from "../models/navigation_path";
import { ROUTE } from "./enums";

// App
export const APP_BASE_URL = "http://localhost:5000/api";
export const APP_NAME = "SaveWise";

// APIs
export const ACTIVITIES_API = "activities";
export const ACCOUNTS_API = "accounts";
export const USERS_API = "users";

// String Constants
export const ADD_ACCOUNT = "Add Account";
export const ACCOUNTS = "Accounts";
export const ACCOUNT_CREATED = "Account Created";
export const CONFIRM_PASSWORD = "Confirm Password";
export const EMAIL_ADDRESS = "Email Address";
export const EMPTY_STRING = "";
export const FIRSTNAME = "First Name";
export const HOME = "Home";
export const LASTNAME = "Last Name";
export const LOADING = "Loading...";
export const LOGIN = "Login";
export const LOGIN_MESSAGE = "Don't have an account?";
export const PASSWORD = "Password";
export const REGISTER = "Register";
export const REGISTER_MESSAGE = "Already have an account?";
export const SEE_DETAILS = "See details";
export const SIGN_IN = "Sign In";
export const SIGN_UP = "Sign Up";
export const TRANSACTIONS = "Transactions";
export const BALANCE = "Balance";
export const USERNAME = "Username";

// Navigation
export const navigationPaths: NavigationPath[] = [
  {
    title: HOME,
    path: ROUTE.HOME,
  },
  {
    title: ACCOUNTS,
    path: ROUTE.ACCOUNT,
  },
  {
    title: TRANSACTIONS,
    path: ROUTE.TRANSACTION,
  },
]