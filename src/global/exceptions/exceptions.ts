type Response = string | any;

class HttpException {
  status: number;
  response: Response;

  constructor(status: number, message: Response) {
    this.status = status;
    this.response = message;
  }
}

export class UnprocessableEntityException extends HttpException {
  constructor(response: Response) {
    super(422, response);
  }
}
