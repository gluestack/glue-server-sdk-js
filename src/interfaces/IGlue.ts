import { Auth } from "../auth";
import { Storage } from "../storage";
import { Functions } from "../functions";

export interface IGlue {
  auth: Auth;
  functions: Functions;
  storage: Storage;
}
