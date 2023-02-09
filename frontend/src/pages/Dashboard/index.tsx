import Modal from "../../components/Modal";
import DashHeader from "../../components/DashHeader";
import FormContact from "../../components/FormContact";
import ListContact from "../../components/ListContact";
import Main from "./styles";
import { useUser } from "../../context/UserContext";

const Dashboard = () => {
  const { modal } = useUser();

  return (
    <Main>
      {modal && <Modal />}
      <DashHeader />
      <FormContact />
      <ListContact />
    </Main>
  );
};

export default Dashboard;
