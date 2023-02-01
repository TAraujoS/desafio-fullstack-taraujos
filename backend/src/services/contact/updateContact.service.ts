import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contact";

const updateContactService = async (
  contactId: string,
  { name, email, phone }: IContactUpdate
): Promise<string> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOneBy({ id: contactId });

  if (!findContact) {
    throw new AppError("Contact id not found or not exists", 404);
  }

  await contactRepository.update(findContact.id, {
    name: name ? name : findContact.name,
    email: email ? email : findContact.email,
    phone: phone ? phone : findContact.phone,
  });

  return "Contact updated";
};

export default updateContactService;
