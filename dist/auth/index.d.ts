import { Glue } from "..";
import { IAuth } from "./interfaces/IAuth";
export declare class Auth implements IAuth {
    authToken: string;
    glue: Glue;
    constructor(glue: Glue);
    setAuthToken(token: string): string;
    getAuthToken(): string;
    getUser(): Promise<any>;
    isLoggedIn(): Promise<boolean>;
}
