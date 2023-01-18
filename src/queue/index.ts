import axios, { isAxiosError } from "axios";
import { IAddQueue } from "./interfaces/IAddQueue";
import { IQueue } from "./interfaces/IQueue";

export class Queue implements IQueue {
  baseUrl: string = "";

  constructor(BASE_URL: string) {
    this.baseUrl = BASE_URL;
  }

  async add(queue: IAddQueue) {
    try {
      await axios.post(
        `${this.baseUrl}/backend/engine/queue/push`,
        {
          value: queue.value,
          data: queue.data
        }
      )

      return { status: true, message: "ok" }
    } catch (e) {

      if (isAxiosError(e)) {
        return { status: false, message: e.message }
      }
      // ...
      return { status: false, message: "Something went wrong" }
    }
  }

  async addBulk(queueBulk: IAddQueue[]) {
    try {
      for await (const queue of queueBulk) {
        await this.add({
          value: queue.value,
          data: queue.data
        });
      }

      return { status: true, message: "ok" }
    } catch (e) {
      // ...
      return { status: false, message: e.message }
    }
  }
}