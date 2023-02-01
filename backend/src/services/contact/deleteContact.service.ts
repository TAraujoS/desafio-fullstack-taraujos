import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const deleteContactService = async (
  id: string,
  contactId: string
): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: { users: true },
  });

  if (!contact) {
    throw new AppError("Contact id not found or not exists", 404);
  }

  if (contact.users.id !== id) {
    throw new AppError("No authorization", 401);
  }

  await contactRepository.delete(contact.id);
};

export default deleteContactService;
