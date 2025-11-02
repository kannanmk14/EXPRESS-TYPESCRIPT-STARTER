import {ZodObject} from "zod";
import {NextFunction, Request, Response} from "express";

export const schemaValidator = (schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (e) {
      return;
    }
  };
};
