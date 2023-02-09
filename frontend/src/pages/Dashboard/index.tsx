import { useContacts } from "../../context/ContactContext";
import Modal from "../../components/Modal";
import DashHeader from "../../components/DashHeader";
import FormContact from "../../components/FormContact";
import ListContact from "../../components/ListContact";
import Main from "./styles";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { modal } = useContacts();
  const { user } = useAuth();
  console.log(user);
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
