import { Email } from "../email";
import { Queue } from "../queue";
import { Auth } from "../auth";
import { Storage } from "../storage";
export interface IGlue {
    auth: Auth;
    storage: Storage;
    email: Email;
    queue: Queue;
}
