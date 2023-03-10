import { useForm } from "react-hook-form";
import { IUserRegister, useAuth } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { toast } from "react-toastify";
import Input from "../Input";
import { Section } from "../../pages/Login/styles";
import { Form, HeaderForm, LinkStyled } from "./styles";

function FormRegister() {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });
  const onError = () => toast.error("Preencha todos os campos");

  const onSubmit = handleSubmit(registerUser, onError);

  return (
    <Section>
      <HeaderForm>
        <LinkStyled to={"/login"}>Voltar</LinkStyled>
      </HeaderForm>

      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite aqui o seu nome"
          {...register("name")}
          error={errors?.name}
        />
        <Input
          type="text"
          id="email"
          label="Email"
          placeholder="Digite aqui o seu email"
          {...register("email")}
          error={errors?.email}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Digite aqui o sua senha"
          {...register("password")}
          error={errors?.password}
        />
        <Input
          type="password"
          label="Confirmar Senhar"
          id="confirm-password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
          error={errors?.confirmPassword}
        />
        <Input
          type="text"
          id="phone"
          label="Contato"
          placeholder="Opção de contato"
          {...register("phone")}
          error={errors?.phone}
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Section>
  );
}

export default FormRegister;
