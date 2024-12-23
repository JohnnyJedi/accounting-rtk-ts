export enum UpdateMode {
    DEFAULT,
    EDIT_PROFILE,
    CHANGE_PASSWORD
}

export interface UserProfile {
    "login": string,
    "firstName": string,
    "lastName": string,
    "roles": string[]
}

export interface UserRegister {
    password: string;
    "login": string,
    "firstName": string,
    "lastName": string,
}

export interface UserData {
    "firstName": string,
    "lastName": string,
    token?: string
}