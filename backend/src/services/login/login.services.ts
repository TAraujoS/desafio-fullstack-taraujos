import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/user.entity";
import { AppError } from "../../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async ({ email, password }): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Invalid user or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 403);
  }

  const token = jwt.sign(
    { email: user.email },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default loginUserService;
