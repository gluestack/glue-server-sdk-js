import { Glue } from "..";
import { IAuth } from "./interfaces/IAuth";
import { HttpMethod } from "../functions/interfaces/HttpMethod";

export class Auth implements IAuth {
  authToken: string = "";
  glue: Glue;

  constructor(glue: Glue) {
    this.glue = glue;
  }

  //@setAuthToken
  setAuthToken(token: string) {
    this.authToken = token;
    return this.authToken;
  }

  //@getAuthToken
  getAuthToken() {
    return this.authToken;
  }

  //@getUser
  async getUser() {
    if (this.authToken) {
      try {
        const data: any = await this.glue.functions.invoke(
          "auth",
          "authentication/me",
          {},
          {
            "x-hasura-user-token": this.authToken,
          },
          HttpMethod.GET,
        );
        this.setAuthToken(data.token);
        return data.token;
      } catch (e) {
        //
      }
    }
    return null;
  }

  //@isLoggedIn
  async isLoggedIn() {
    if (await this.getUser()) {
      return true;
    }
    return false;
  }
}
