import { useContacts } from "../../context/ContactContext";
import Modal from "../../components/Modal";
import DashHeader from "../../components/DashHeader";
import FormContact from "../../components/FormContact";
import ListContact from "../../components/ListContact";

const Dashboard = () => {
  const { modal } = useContacts();

  return (
    <>
      {modal && <Modal />}
      <DashHeader />
      <FormContact />
      <ListContact />
    </>
  );
};

export default Dashboard;
