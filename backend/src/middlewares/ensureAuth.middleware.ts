import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers) {
    return res.status(401).json({ message: "Token required" });
  }

  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization token 1" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: "Missing authorization token 2" });
    }

    req.user = {
      id: decoded.sub,
      email: decoded.email,
    };

    return next();
  });
};

export default ensureAuthMiddleware;
