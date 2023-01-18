import axios from "axios";
import { IFunctions } from "./interfaces/IFunctions";
import { HttpMethod } from "./interfaces/HttpMethod";
import { Glue } from "../";

export class Functions implements IFunctions {
  glue: Glue;

  constructor(glue: Glue) {
    this.glue = glue;
  }

  //TODO: doesn't support activating of idle VMs
  //@invoke
  async invoke(
    serviceAppId: string,
    serviceMethod: string,
    body: any = {},
    headers: any = {},
    method: HttpMethod = HttpMethod.POST,
  ) {
    const { data } = await axios({
      method: HttpMethod.POST,
      url: `${this.glue.appBaseUrl}/backend/engine/server/invoke`,
      data: {
        action_name: serviceAppId,
        method_uri: serviceMethod,
        method_name: method,
        data: body
      },
      headers: headers
    });
    return data.data;
  }
}
