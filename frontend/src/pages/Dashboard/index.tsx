import { useAuth } from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  const { logout, user } = useAuth();
  console.log(user);
  return (
    <section>
      <button onClick={() => logout()}>
        <BiLogOut />
      </button>
      <h1>Olá, {user?.name}! Como estão os contatos?</h1>
    </section>
  );
};

export default Dashboard;
