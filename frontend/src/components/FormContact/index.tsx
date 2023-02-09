import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { INewContact, useContacts } from "../../context/ContactContext";
import { registerContact } from "../../schemas";
import { Error } from "../Input/styles";
import { Container } from "./styles";

const FormContact = () => {
  const { newContact } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewContact>({ resolver: yupResolver(registerContact) });

  const onError = () => toast.error("Preencha todos os campos");
  const onSubmit = handleSubmit(newContact, onError);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <label className="name">Nome</label>
          <input
            type="text"
            placeholder="Nome do contato"
            {...register("name")}
          />
          {errors?.name && <BiErrorCircle />}
        </div>

        <div>
          <label className="email">Email</label>
          <input
            type="text"
            placeholder="Email do contato"
            {...register("email")}
          />
          {errors?.email && <BiErrorCircle />}
        </div>

        <div>
          <label className="phone">Telefone</label>
          <input
            type="text"
            placeholder="Número do contato"
            {...register("phone")}
          />
          {errors?.phone && <BiErrorCircle />}
        </div>

        <button type="submit">Adicionar Contato</button>
      </form>
    </Container>
  );
};

export default FormContact;
