export interface UsersState {
    isFetching: boolean,
    currentUser?: User,
}

export interface LoginUserInput {
    email: string,
    password: string,
}

export interface RegisterUserInput {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export interface User {
    username: string,
    token: string,
}