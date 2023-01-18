import { Glue } from "../..";

export interface IStorage {
  glue: Glue;
  instanceName: string;
  upload(file: any): Promise<any>;
  getPresignedUrl(id: number): Promise<string>;
}
