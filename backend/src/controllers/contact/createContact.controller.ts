import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContact } from "../../interfaces/contact";
import createContactService from "../../services/contact/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data: IContact = req.body;

  const contact = await createContactService(id, data);

  return res.status(201).json(instanceToPlain(contact));
};

export default createContactController;
