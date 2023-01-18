import { Auth } from "./auth";
import { Email } from "./email";
import { Queue } from "./queue";
import { Storage } from "./storage";
import { IGlue } from "./interfaces/IGlue";

export class Glue implements IGlue {
  auth: Auth;
  storage: Storage;
  email: Email
  queue: Queue;

  constructor({ BASE_URL }: { BASE_URL: string }) {
    this.auth = new Auth(BASE_URL);
    this.email = new Email(BASE_URL);
    this.queue = new Queue(BASE_URL);
    this.storage = new Storage();
  }
}
