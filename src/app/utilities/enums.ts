export enum FORM_TYPE {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    LOGIN = "LOGIN"
}

export enum VARIANT {
    PRIMARY = "primary",
    DARK = "dark",
}

export enum SLICE_NAME {
    ACCOUNTS = "accounts",
    USERS = "users",
};

export enum ROUTE {
    ACCOUNT = "/accounts",
    ACCOUNT_DETAILS = "/accounts/:id",
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register",
    TRANSACTION = "/transactions",
}

export enum REQUEST_STATUS_MESSAGE {
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    SERVER_ERROR = "Server Error",
}

export enum USER_FORM {
    LOGIN,
    REGISTER,
}
