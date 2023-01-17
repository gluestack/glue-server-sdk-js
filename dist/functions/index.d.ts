import { IFunctions } from "./interfaces/IFunctions";
import { HttpMethod } from "./interfaces/HttpMethod";
import { Glue } from "../";
export declare class Functions implements IFunctions {
    glue: Glue;
    constructor(glue: Glue);
    invoke(serviceAppId: string, serviceMethod: string, body?: any, headers?: any, method?: HttpMethod): Promise<any>;
}
