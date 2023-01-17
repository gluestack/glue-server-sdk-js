import { Storage } from "./storage";
import { Auth } from "./auth";
import { Functions } from "./functions";
import { IGlue } from "./interfaces/IGlue";
export declare class Glue implements IGlue {
    appBaseUrl: string;
    auth: Auth;
    functions: Functions;
    storage: Storage;
    constructor(appBaseUrl?: string);
}
