import { IUser } from "./IUser";
export interface IAuth {
    authToken: string;
    setAuthToken(token: string): string;
    getAuthToken(): string;
    getUser(): Promise<IUser>;
    isLoggedIn(): Promise<boolean>;
}
