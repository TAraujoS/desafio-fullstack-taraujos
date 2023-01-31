import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controller";
import listContactController from "../controllers/contact/listContact.controller";
import updateContactController from "../controllers/contact/updateContact.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import verifyContactIdMiddleware from "../middlewares/verifyContactId.middleware";
import verifyUserIdMiddleware from "../middlewares/verifyUserId.middleware";
import { contactSchema, contactUpdateSchema } from "../schemas/contact.schema";

const contactRoutes = Router();

contactRoutes.post(
  "/:id",
  ensureAuthMiddleware,
  verifyUserIdMiddleware,
  validateSchemaMiddleware(contactSchema),
  createContactController
);
contactRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  verifyUserIdMiddleware,
  listContactController
);
contactRoutes.patch(
  "/:contactId",
  ensureAuthMiddleware,
  verifyContactIdMiddleware,
  validateSchemaMiddleware(contactUpdateSchema),
  updateContactController
);
contactRoutes.delete(
  "/:contactId",
  ensureAuthMiddleware,
  deleteContactController
);

export default contactRoutes;
