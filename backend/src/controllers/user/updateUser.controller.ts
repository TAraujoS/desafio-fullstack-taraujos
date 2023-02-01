import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/user";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data: IUserUpdate = req.body;

  const user = await updateUserService(id, data);

  return res.json({ message: "User updated" });
};

export default updateUserController;
