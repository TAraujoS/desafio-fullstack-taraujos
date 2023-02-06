import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../context/AuthContext";
import { useContacts } from "../../context/ContactContext";
import { Header } from "./styles";

const DashHeader = () => {
  const { logout, user } = useAuth();
  const { setModal } = useContacts();

  return (
    <Header>
      <div>
        <button onClick={() => setModal("user")}> Editar Perfil</button>
        <button className="logout" onClick={() => logout()}>
          Sair
          <BiLogOut />
        </button>
      </div>
      <h1>Olá, {user?.name}! Como estão os contatos?</h1>
    </Header>
  );
};

export default DashHeader;
