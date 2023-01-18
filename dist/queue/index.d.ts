import { IAddQueue } from "./interfaces/IAddQueue";
import { IQueue } from "./interfaces/IQueue";
export declare class Queue implements IQueue {
    baseUrl: string;
    constructor(BASE_URL: string);
    add(queue: IAddQueue): Promise<{
        status: boolean;
        message: string;
    }>;
    addBulk(queueBulk: IAddQueue[]): Promise<{
        status: boolean;
        message: any;
    }>;
}
