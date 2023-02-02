import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Senha deve conter 8 letras, uma maiúscula, uma minúscula, um número e um caracter especial"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  phone: yup.string().required("Contato obrigatório"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});
