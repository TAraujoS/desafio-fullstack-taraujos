import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { INewContact, useContacts } from "../../context/ContactContext";
import { registerContact } from "../../schemas";
import { Container } from "./styles";

const FormContact = () => {
  const { newContact } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewContact>({ resolver: yupResolver(registerContact) });

  const onSubmit = handleSubmit(newContact);

  return (
    <Container>
      <form onSubmit={() => onSubmit}>
        <div>
          <label className="name">Nome</label>
          <input
            type="text"
            placeholder="Nome do contato"
            {...register("name")}
          />
        </div>

        <div>
          <label className="email">Email</label>
          <input
            type="text"
            placeholder="Email do contato"
            {...register("email")}
          />
        </div>

        <div>
          <label className="phone">Telefone</label>
          <input
            type="text"
            placeholder="Número do contato"
            {...register("phone")}
          />
        </div>

        <button type="submit">Adicionar Contato</button>
      </form>
    </Container>
  );
};

export default FormContact;
