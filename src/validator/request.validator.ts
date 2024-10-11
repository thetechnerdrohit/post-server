import { NextFunction, Request, Response } from "express";
import pick from "../utils/pick";
import Joi from "joi";
import ApiError from "../utils/ApiError";

type ValidationErrors = {
  [key: string]: string[];
};
function createMessage(error: Joi.ValidationError): ValidationErrors {
  const errors: ValidationErrors = {};
  for (let i = 0; i < error.details.length; i++) {
    const message: string = error.details[i].message;
    const key: string = message.split('"')[1];
    errors[key] = [message];
  }
  return errors;
}

const validator =
  (schema: Record<string, any>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    let errors: ValidationErrors = {};

    const validSchema = pick(schema, ["query", "params", "body"]);
    const object = pick(req, Object.keys(validSchema));

    const { error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" } })
      .validate(object, { abortEarly: false });

    if (error) {
      errors = { ...errors, ...createMessage(error) };
      console.log(JSON.stringify(errors));
      return next(new ApiError(400, "Validation error", errors));
    }
    return next();
  };
export default validator;
