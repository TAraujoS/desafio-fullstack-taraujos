import { Router } from "express";
import loginUserController from "../controllers/login/loginUser.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { userLoginSchema } from "../schemas/user.schema";

const loginRoutes = Router();

loginRoutes.post(
  "",
  validateSchemaMiddleware(userLoginSchema),
  loginUserController
);

export default loginRoutes;
