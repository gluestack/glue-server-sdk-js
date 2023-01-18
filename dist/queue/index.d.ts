import { Glue } from "..";
import { IAddQueue } from "./interfaces/IAddQueue";
import { IQueue } from "./interfaces/IQueue";
export declare class Queue implements IQueue {
    glue: Glue;
    constructor(glue: Glue);
    add(queue: IAddQueue): Promise<{
        status: boolean;
        message: string;
    }>;
    addBulk(queueBulk: IAddQueue[]): Promise<{
        status: boolean;
        message: any;
    }>;
}
