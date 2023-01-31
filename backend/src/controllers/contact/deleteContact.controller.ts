import { Request, Response } from "express";
import deleteContactService from "../../services/contact/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const { id } = req.user;

  await deleteContactService(id, contactId);

  return res.status(204).send();
};

export default deleteContactController;
