import { Auth } from "./auth";
import { Email } from "./email";
import { Queue } from "./queue";
import { Storage } from "./storage";
import { IGlue } from "./interfaces/IGlue";
export declare class Glue implements IGlue {
    auth: Auth;
    storage: Storage;
    email: Email;
    queue: Queue;
    constructor({ BASE_URL }: {
        BASE_URL: string;
    });
}
