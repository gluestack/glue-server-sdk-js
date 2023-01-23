import axios from "axios";
import { Glue } from "..";
var FormData = require("form-data");
import { IStorage } from "./interfaces/IStorage";
import { HttpMethod } from "../functions/interfaces/HttpMethod";

export class Storage implements IStorage {
  glue: Glue;
  instanceName: string = "storage";

  constructor(glue: Glue) {
    this.glue = glue;
  }

  //@upload
  async upload(file: any, is_public: boolean = false) {
    const formData = new FormData();
    formData.append("is_public", is_public.toString());
    formData.append("file", file);
    const { data } = await axios.post(
      `${this.glue.appBaseUrl}/backend/${this.instanceName}/upload/`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    );
    return data;
  }

  //@getPresignedUrl
  async getPresignedUrl(id: number): Promise<string> {
    const { url }: any = await this.glue.functions.invoke(
      this.instanceName,
      `get/${id}`,
      {},
      {},
      HttpMethod.GET,
    );
    return url;
  }

  //@getPublicUrl
  getPublicUrl(path: string): string {
    return `${this.glue.appBaseUrl}/backend/${this.instanceName}/file/public/${path}`;
  }
}
