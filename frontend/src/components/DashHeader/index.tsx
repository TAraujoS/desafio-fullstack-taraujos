import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../context/AuthContext";
import { useContacts } from "../../context/ContactContext";

const DashHeader = () => {
  const { logout, user } = useAuth();
  const { setModal } = useContacts();

  return (
    <header>
      <button onClick={() => setModal("user")}> Editar Perfil</button>
      <button onClick={() => logout()}>
        Sair
        <BiLogOut />
      </button>
      <h1>Olá, {user?.name}! Como estão os contatos?</h1>
    </header>
  );
};

export default DashHeader;
