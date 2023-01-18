import { Auth } from "./auth";
import { Email } from "./email";
import { Queue } from "./queue";
import { Storage } from "./storage";
import { Functions } from "./functions";
import { IGlue } from "./interfaces/IGlue";
export declare class Glue implements IGlue {
    appBaseUrl: string;
    auth: Auth;
    functions: Functions;
    storage: Storage;
    email: Email;
    queue: Queue;
    constructor(appBaseUrl?: string);
}
