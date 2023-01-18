/// <reference types="node" />
/// <reference types="node" />
import { Glue } from "..";
import { Stream } from "stream";
import { IAttachments } from "./interfaces/IAttachment";
import { IEmail } from "./interfaces/IEmail";
export declare class Email implements IEmail {
    glue: Glue;
    constructor(glue: Glue);
    send(emailBody: {
        mailOptions: {
            from: string;
            to: string | (string | object)[];
            subject: string;
            html: string | Buffer | Stream | IAttachments;
            data: object;
            text?: string | Buffer | Stream | IAttachments;
            cc?: string | (string | object)[];
            bcc?: string | (string | object)[];
            attachments?: IAttachments[];
        };
        transportOptions: {
            host: string;
            port: number;
            auth: object;
        };
    }): Promise<{
        status: boolean;
        message: string;
    }>;
    private generate;
}
export { Glue };
