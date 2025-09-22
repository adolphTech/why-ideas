import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import pino from 'pino';

const logger = pino({
  level: 'error',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(error);

  // Zod validation errors
  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    });
    return;
  }

  // Default server error
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};