export enum SLICE_NAME {
    ACCOUNTS = "accounts",
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
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register",
    TRANSACTION = "/transactions",
    ALL = "*",
}

export enum USER_FORM {
    LOGIN,
    REGISTER,
}

// Styles
export enum FORM_TYPE {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
}

export enum VARIANT {
    PRIMARY = "primary",
    DARK = "dark",
}