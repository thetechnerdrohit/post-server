import { NextFunction, Request, Response } from "express";
import ApiError from "./ApiError";

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err: ApiError, _req: Request, res: Response, _next: NextFunction) => {
    let { statusCode, message } = err;
    if (process.env.NODE_ENV === 'production') {
      statusCode = 403;
      message = 'Internal Server Error';
    }
   
   
    res.locals['errorMessage'] = err.message;
   
   
    const response = {
      statusCode,
      message,
      stack: err.stack,
      status: false,
    };
   
   
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    }
   
   
    res.status(statusCode).send(response);
}