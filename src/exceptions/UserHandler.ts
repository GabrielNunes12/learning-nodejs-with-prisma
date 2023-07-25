export class UserHandler {
  #message: String;
  #status: number;
  #timestamp: Date;
  constructor(message: String, status: number, timestamp: Date) {
    this.#message = message;
    this.#status = status;
    this.#timestamp = timestamp;
  }
  get message() {
    return {
      message: this.#message,
      status: this.#status,
      timestamp: this.#timestamp,
    };
  }
}
