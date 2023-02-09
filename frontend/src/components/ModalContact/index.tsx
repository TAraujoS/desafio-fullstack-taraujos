import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IEditContact, useContacts } from "../../context/ContactContext";
import { useUser } from "../../context/UserContext";
import { editUser } from "../../schemas";
import EditForm from "./styles";

const ModalContact = () => {
  const { contact, deleteContact, editContact } = useContacts();
  const { setModal } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditContact>({
    resolver: yupResolver(editUser),
  });

  return (
    <>
      <section>
        <h3>Detalhes do Contato</h3>
        <button onClick={() => setModal(null)}>X</button>
      </section>
      <EditForm onSubmit={handleSubmit(editContact)}>
        <label htmlFor="name">Nome</label>
        <input id="name" placeholder={contact.name} {...register("name")} />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder={contact.email}
          type="email"
          {...register("email")}
        />
        <label>Contato</label>
        <input id="phone" placeholder={contact.phone} {...register("phone")} />

        <div className="btnDiv">
          <button type="submit">Salvar Contato</button>
          <span className="btnDelete" onClick={() => deleteContact(contact.id)}>
            Excluir
          </span>
        </div>
      </EditForm>
    </>
  );
};

export default ModalContact;
