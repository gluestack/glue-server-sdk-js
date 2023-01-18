/// <reference types="node" />
/// <reference types="node" />
import { Stream } from "stream";
import { IAttachments } from "./IAttachment";
import { IEmailResponse } from "./IEmailRespose";
export interface IEmail {
    baseUrl: string;
    send(emailBody: {
        mailOptions: {
            from: string;
            to: string | Array<string | object>;
            subject: string;
            html: string | Buffer | Stream | IAttachments;
            data: object;
            text?: string | Buffer | Stream | IAttachments;
            cc?: string | Array<string | object>;
            bcc?: string | Array<string | object>;
            attachments?: Array<IAttachments>;
        };
        transportOptions: {
            host: string;
            port: number;
            auth: object;
        };
    }): Promise<IEmailResponse>;
}
