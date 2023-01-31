import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user";

const listUserService = async (id: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User id not found or not exists", 404);
  }

  return user;
};

export default listUserService;
