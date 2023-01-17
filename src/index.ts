import { Storage } from "./storage";
import { Auth } from "./auth";
import { Functions } from "./functions";
import { IGlue } from "./interfaces/IGlue";

export class Glue implements IGlue {
  appBaseUrl:string;
  auth: Auth;
  functions: Functions;
  storage: Storage;

  constructor(appBaseUrl: string = "http://localhost:9090") {
    this.appBaseUrl = appBaseUrl
    this.auth = new Auth(this);
    this.functions = new Functions(this);
    this.storage = new Storage(this);
  }
}
