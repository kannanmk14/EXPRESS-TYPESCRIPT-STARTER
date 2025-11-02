import {Request, Response} from "express";

export const pingHandler = (req: Request, res: Response): void => {
  res.send("pong");
};

export const pingBaseHandler = (req: Request, res: Response) => {
  res.status(200).send("OK");
};
