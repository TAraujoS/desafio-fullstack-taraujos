import { Request, Response } from "express";
import listContactService from "../../services/contact/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const contact = await listContactService(id);

  return res.status(200).json(contact);
};

export default listContactController;
