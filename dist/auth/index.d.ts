import { IAuth } from "./interfaces/IAuth";
import IAuthProviderEnum from "./interfaces/IAuthProviderEnum";
export declare class Auth implements IAuth {
    authBaseUrl: string;
    authToken: string;
    constructor(AUTH_BASE_URL: string);
    loginWithEmailPassword(email: string, password: string): Promise<any>;
    socialLogin(provider: IAuthProviderEnum): Promise<string>;
    login(authObject: {
        provider?: IAuthProviderEnum;
        email?: string;
        password?: string;
    }): Promise<any>;
    setAuthToken(token: string): string;
    getAuthToken(): string;
    getUser(): Promise<any>;
    isLoggedIn(): Promise<boolean>;
}
