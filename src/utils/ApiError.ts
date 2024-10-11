class ApiError extends Error {
    statusCode: number;
   
   
    override stack?: any;
   
   
    constructor(statusCode: number, message: string, stack: any) {
      super(message);
      this.statusCode = statusCode;
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
   }
   
   
   export default ApiError;
   