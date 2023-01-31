import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IContact } from "../../interfaces/contact";

const createContactService = async (
  id: string,
  { name, email, phone }: IContact
): Promise<IContact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const userExists = await userRepository.findOneBy({ id: id });

  if (!userExists) {
    throw new AppError("User id not found or not exists", 404);
  }

  const contact = contactRepository.create({
    name,
    email,
    phone,
    users: userExists,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
