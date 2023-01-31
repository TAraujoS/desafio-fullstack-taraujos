import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IContact } from "../../interfaces/contact";

const listContactService = async (id: string): Promise<IContact[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User id not found or not exists", 404);
  }

  return user.contacts;
};

export default listContactService;
