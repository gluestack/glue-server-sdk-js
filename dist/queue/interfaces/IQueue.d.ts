import { IAddQueue } from "./IAddQueue";
import { IQueueResponse } from "./IQueueRespose";
export interface IQueue {
    add(queue: IAddQueue): Promise<IQueueResponse>;
    addBulk(queueBulk: IAddQueue[]): Promise<IQueueResponse>;
}
