import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

import { IUser, IUserRequest } from "../../interfaces/user";

const createUserService = async ({
  name,
  email,
  password,
  phone,
}: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({ email: email });

  if (userExists) {
    throw new AppError("Email already exists", 409);
  }

  const hashedPassword = await hash(password, 10);

  const newUser = userRepository.create({
    name,
    password: hashedPassword,
    email,
    phone,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
