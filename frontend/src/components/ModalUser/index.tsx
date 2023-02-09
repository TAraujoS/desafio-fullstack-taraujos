import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiErrorCircle } from "react-icons/bi";
import { useContacts } from "../../context/ContactContext";
import { editUser } from "../../schemas";
import { IEditUser, useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import ModalForm from "./styles";

const ModalUser = () => {
  const { user } = useAuth();
  const { updateUser, deleteUser, setModal } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({ resolver: yupResolver(editUser) });

  return (
    <>
      <section>
        <h3>Suas Informações</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={handleSubmit(updateUser)}>
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
      </ModalForm>
      <button onClick={deleteUser}>Excluir Contato</button>
    </>
  );
};

export default ModalUser;
