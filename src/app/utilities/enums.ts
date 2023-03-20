export enum SLICE_NAME {
    ACCOUNTS = "accounts",
    ACTIVITIES = "activities",
    TRANSACTIONS = "transactions",
    USERS = "users",
};

export enum REQUEST_STATUS_MESSAGE {
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    SERVER_ERROR = "Server Error",
}

export enum ROUTE_NAME {
    ACCOUNT = "/accounts",
    ACCOUNT_DETAILS = "/accounts/:id",
    ACCTIVITIES = "/activities",
    ALL = "*",
    LOGIN = "/login",
    REGISTER = "/register",
}

export enum TRANSACTION_TYPE {
    EXPENSE,
    INCOME,
}

export enum USER_FORM {
    LOGIN,
    REGISTER,
}

// Styles
export enum FORM_TYPE {
    EMAIL = "email",
    NUMBER = "number",
    PASSWORD = "password",
    RADIO = "radio",
    TEXT = "text",
}

export enum VARIANT {
    DANGER = "danger",
    DARK = "dark",
    PRIMARY = "primary",
}