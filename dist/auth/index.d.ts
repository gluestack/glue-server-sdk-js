import { Glue } from "..";
import { IAuth, ILoginArgs } from "./interfaces/IAuth";
import { IUser } from "./interfaces/IUser";
export declare class Auth implements IAuth {
    authToken: string;
    glue: Glue;
    constructor(glue: Glue);
    setAuthToken(token: string): string;
    getAuthToken(): string;
    getUser(): Promise<IUser>;
    isLoggedIn(): Promise<boolean>;
    login(args: ILoginArgs): Promise<any>;
}
