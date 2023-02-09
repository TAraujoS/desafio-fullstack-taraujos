import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiErrorCircle } from "react-icons/bi";
import { useContacts } from "../../context/ContactContext";
import { editUser } from "../../schemas";
import { IEditUser, useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import ModalForm from "./styles";
import { update } from "cypress/types/lodash";

const ModalUser = () => {
  const { user } = useAuth();
  const { setModal } = useContacts();
  const { updateUser, deleteUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({ resolver: yupResolver(editUser) });

  const onSubmit = (user: IEditUser) => {
    updateUser(user);
    setModal(null);
  };

  return (
    <>
      <section>
        <h3>Suas Informações</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={() => onSubmit(user)}>
        <label htmlFor="name">Nome</label>
        <div>
          <input id="name" {...register("name")} placeholder={user.name} />
          <span>{errors?.name && <BiErrorCircle />}</span>
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input id="email" {...register("email")} placeholder={user.email} />
          <span>{errors?.email && <BiErrorCircle />}</span>
        </div>
        <label htmlFor="phone">Contato</label>
        <div>
          <input id="phone" {...register("phone")} placeholder={user.phone} />
          <span>{errors?.phone && <BiErrorCircle />}</span>
        </div>

        <button type="submit">Atualizar informações</button>
        <button type="submit" onClick={() => deleteUser()}>
          Excluir conta
        </button>
      </ModalForm>
    </>
  );
};

export default ModalUser;
