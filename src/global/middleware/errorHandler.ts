import { Request, Response, NextFunction } from "express";

export default async function errorHandler(
  error: any,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  next();
  if (error) {
    return res
      .status(error.status || 500)
      .send(error.response || "Something went wrong");
  }

  res.sendStatus(500);
}
