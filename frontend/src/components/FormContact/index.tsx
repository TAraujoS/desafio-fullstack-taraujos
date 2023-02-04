import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { INewContact, useContacts } from "../../context/ContactContext";
import { registerContact } from "../../schemas";

const FormContact = () => {
  const { newContact } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewContact>({ resolver: yupResolver(registerContact) });

  const onSubmit = handleSubmit(newContact);

  return (
    <section>
      <form onSubmit={() => onSubmit}>
        <label className="name">Nome</label>
        <input
          type="text"
          placeholder="Nome do contato"
          {...register("name")}
        />
        <div>
          <label className="email">
            Email
            <input
              type="text"
              placeholder="Email do contato"
              {...register("email")}
            />
          </label>

          <label className="phone">
            Telefone
            <input
              type="text"
              placeholder="Número do contato"
              {...register("phone")}
            />
          </label>
        </div>
        <button type="submit">Adicionar Contato</button>
      </form>
    </section>
  );
};

export default FormContact;
