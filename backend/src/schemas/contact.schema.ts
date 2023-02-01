import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactUpdate } from "../interfaces/contact";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

const contactUpdateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
});

export { contactSchema, contactUpdateSchema };
