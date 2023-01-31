import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";
import AppError from "../errors/appError";

const verifyContactIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      users: true,
    },
  });

  if (req.user.id === contact.users.id) {
    next();
  } else {
    throw new AppError("No authorization", 401);
  }
};

export default verifyContactIdMiddleware;
