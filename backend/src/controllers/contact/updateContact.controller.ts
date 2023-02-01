import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/user";
import updateContactService from "../../services/contact/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data: IUserUpdate = req.body;

  const contact = await updateContactService(id, data);

  return res.json({ message: contact });
};

export default updateContactController;
