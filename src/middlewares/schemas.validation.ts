import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateBody(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, "body");
}

export function validateParams(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, "params");
}

export function validateQuery(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, "query");
}

function validate(schema: ObjectSchema, type: "body" | "params" | "query") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });

    if (!error) return next();
    
    res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .send(error.details.map((d) => d.message));
  };
}

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
