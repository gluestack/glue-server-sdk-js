import { Auth } from "./auth";
import { Email } from "./email";
import { Queue } from "./queue";
import { Storage } from "./storage";
import { Functions } from "./functions";
import { IGlue } from "./interfaces/IGlue";

export class Glue implements IGlue {
  appBaseUrl: string;
  auth: Auth;
  functions: Functions;
  storage: Storage;
  email: Email
  queue: Queue;

  constructor(appBaseUrl: string = "http://localhost:9090") {
    this.appBaseUrl = appBaseUrl
    this.auth = new Auth(this);
    this.email = new Email(this);
    this.queue = new Queue(this);
    this.functions = new Functions(this);
    this.storage = new Storage(this);
  }
}
