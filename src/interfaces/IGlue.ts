import { Email } from "../email";
import { Queue } from "../queue"
import { Auth } from "../auth";
import { Storage } from "../storage";
import { Functions } from "../functions";

export interface IGlue {
  auth: Auth;
  functions: Functions;
  storage: Storage;
  email: Email
  queue: Queue
}
