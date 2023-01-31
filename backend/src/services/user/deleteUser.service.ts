import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User id not found or not exists", 404);
  }

  await userRepository.delete(user.id);
};

export default deleteUserService;
