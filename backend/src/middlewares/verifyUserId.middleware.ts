import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyUserIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  if (id === req.user.id) {
    next();
  } else {
    throw new AppError("No authorization", 401);
  }
};

export default verifyUserIdMiddleware;
