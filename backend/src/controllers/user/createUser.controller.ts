import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUser } from "../../interfaces/user";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: IUser = req.body;
  const user = await createUserService(data);
  return res.status(201).json(instanceToPlain(user));
};

export default createUserController;
