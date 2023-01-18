import { Glue } from "../..";
import { HttpMethod } from "./HttpMethod";
export interface IFunctions {
    glue: Glue;
    invoke(serviceAppId: string, serviceMethod: string, body: any, headers: any, method: HttpMethod): Promise<any>;
}
