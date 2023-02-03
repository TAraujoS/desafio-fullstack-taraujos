import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUserController from "../controllers/user/listUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import verifyUserIdMiddleware from "../middlewares/verifyUserId.middleware";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post("", validateSchemaMiddleware(userSchema), createUserController);
userRoutes.get("/account", ensureAuthMiddleware, listUserController);
userRoutes.patch(
  "/account",
  ensureAuthMiddleware,
  validateSchemaMiddleware(userUpdateSchema),
  updateUserController
);
userRoutes.delete("/account", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
