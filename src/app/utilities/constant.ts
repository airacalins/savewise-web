import { NavigationPath } from "../models/navigation_path";
import { ROUTE_NAME } from "./enums";

// App
export const APP_BASE_URL = "http://localhost:5000/api";
export const APP_NAME = "SaveWise";

// APIs
export const ACTIVITIES_API = (accountId: string) => `accounts/${accountId}/activities`;
export const ACCOUNTS_API = "accounts";
export const CREATE_ACCOUNT_API = "accounts";
export const CREATE_TRANSACTIONS_API = (accountId: string) => `accounts/${accountId}/transactions`;
export const DELETE_ACCOUNT_API = (id: string) => `accounts/${id}`;
export const DELETE_TRANSACTIONS_API = (accountId: string, id: string) => `accounts/${accountId}/transactions/${id}`;
export const GET_ACCOUNT_BY_ID_API = (id: string) => `accounts/${id}`;
export const UPDATE_ACCOUNT_API = (id: string) => `accounts/${id}`;
export const UPDATE_TRANSACTIONS_API = (accountId: string, id: string) => `accounts/${accountId}/transactions/${id}`;
export const LOGIN_API = "users/login";
export const REGISTER_API = "users/register";
export const USERS_API = "users";
export const TRANSACTIONS_API = (accountId: string) => `accounts/${accountId}/transactions`;

// String Constants
export const ADD_ACCOUNT = "Add Account";
export const ADD_TRANSACTION = "Add transaction";
export const ACCOUNTS = "Accounts";
export const ACCOUNT_CREATED = "Account Created";
export const BALANCE = "Balance";
export const CONFIRM_PASSWORD = "Confirm Password";
export const CREATE = "Create";
export const CREATE_ACCOUNT = "Create Account";
export const EDIT = "Edit";
export const EDIT_ACCOUNT = "Edit Account";
export const EMAIL_ADDRESS = "Email Address";
export const EMPTY_STRING = "";
export const EXPENSE = "Expense";
export const FIRSTNAME = "First Name";
export const HOME = "Home";
export const INCOME = "Income";
export const LASTNAME = "Last Name";
export const LOADING = "Loading...";
export const LOGIN = "Login";
export const LOGIN_MESSAGE = "Don't have an account?";
export const NO_TRANSACTIONS = "No transactions";
export const NOT_FOUND = "Opps... We can''t find what you are looking for";
export const PASSWORD = "Password";
export const REGISTER = "Register";
export const REGISTER_MESSAGE = "Already have an account?";
export const SHOW = "Show";
export const SIGN_IN = "Sign In";
export const SIGN_UP = "Sign Up";
export const TITLE = "Title";
export const TRANSACTIONS = "Transactions";
export const USERNAME = "Username";

// Navigation
export const navigationPaths: NavigationPath[] = [
    {
        title: HOME,
        path: ROUTE_NAME.HOME,
    },
    {
        title: ACCOUNTS,
        path: ROUTE_NAME.ACCOUNT,
    },
    {
        title: TRANSACTIONS,
        path: ROUTE_NAME.TRANSACTION,
    },
]