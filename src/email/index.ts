import axios, { isAxiosError } from "axios";
import { Stream } from "stream";
import { IAttachments } from "./interfaces/IAttachment";
import { IEmail } from "./interfaces/IEmail";
var compile = require('es6-template-strings');
import { Queue } from "../queue";

export class Email implements IEmail {
  baseUrl: string = "";

  constructor(BASE_URL: string) {
    this.baseUrl = BASE_URL;
  }

  async send(
    emailBody: {
      mailOptions: {
        from: string,
        to: string | (string | object)[],
        subject: string,
        html: string | Buffer | Stream | IAttachments,
        data: object,
        text?: string | Buffer | Stream | IAttachments,
        cc?: string | (string | object)[],
        bcc?: string | (string | object)[],
        attachments?: IAttachments[]
      },
      transportOptions: {
        host: string,
        port: number,
        auth: object
      }
    }
  ) {
    try {
      let isRowString = false;

      // check HTML is url or row data
      if (typeof emailBody.mailOptions.html !== 'object') {
        isRowString = true;
      }

      // generating template based on request type
      const template = await this.generate(emailBody.mailOptions.html, emailBody.mailOptions.data, isRowString);

      // remove data from mailOptions & replace html to generated html
      delete emailBody.mailOptions.data;
      emailBody.mailOptions.html = template;

      const glue = new Queue(this.baseUrl);

      await glue.add({
        value: "email",
        data: { ...emailBody }
      })

      return { status: true, message: "ok" }
    } catch (e) {
      if (isAxiosError(e)) {
        return { status: false, message: e.message }
      }
      // ...
      return { status: false, message: "Something went wrong" }
    }
  }

  /*
  * compile HTML template
  */
  private async generate(html: string | object, data: object, isRowString: boolean) {
    let compiledHTML = '';

    // Render and return the handlebars template with the given data
    if (isRowString) {
      compiledHTML = compile(html, data);
    } else {
      try {
        // @ts-ignore
        const url = html.path;
        const res = await axios.get(url);

        compiledHTML = compile(res.data, data);
      } catch (e: any) {
        console.log("Download HTML file error > ", e.message)
        compiledHTML = 'Error in HTML template!'
      }
    }

    return compiledHTML;
  }

}
