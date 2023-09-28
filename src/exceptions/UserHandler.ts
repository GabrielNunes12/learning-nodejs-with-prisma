export class UserHandler {
  private message: String;
  private status: number;
  private timestamp: Date;
  constructor(message: String, status: number, timestamp: Date) {
    this.message = message;
    this.status = status;
    this.timestamp = timestamp;
  }
  get messageStatus() {
    return {
      message: this.message,
      status: this.status,
      timestamp: this.timestamp,
    };
  }
}
