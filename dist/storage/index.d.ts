import { IStorage } from "./interfaces/IStorage";
export declare class Storage implements IStorage {
    storageBaseUrl: string;
    constructor();
    upload(file: any): Promise<any>;
    getPresignedUrl(path: string): Promise<string>;
}
