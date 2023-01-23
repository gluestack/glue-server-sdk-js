import { Glue } from "..";
import { IStorage } from "./interfaces/IStorage";
export declare class Storage implements IStorage {
    glue: Glue;
    instanceName: string;
    constructor(glue: Glue);
    upload(file: any, is_public?: boolean): Promise<any>;
    getPresignedUrl(id: number): Promise<string>;
    getPublicUrl(path: string): string;
}
