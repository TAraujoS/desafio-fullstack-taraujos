import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  await deleteUserService(id);

  return res.status(204).send();
};

export default deleteUserController;
