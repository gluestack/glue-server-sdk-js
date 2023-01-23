import { Glue } from "../..";
export interface IStorage {
    glue: Glue;
    instanceName: string;
    upload(file: any, is_public: boolean): Promise<any>;
    getPresignedUrl(id: number): Promise<string>;
    getPublicUrl(path: string): string;
}
