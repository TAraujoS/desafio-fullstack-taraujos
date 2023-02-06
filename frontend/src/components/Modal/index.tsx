import { useContacts } from "../../context/ContactContext";
import ModalContact from "../ModalContact";
import ModalUser from "../ModalUser";

import Container from "./styles";

const Modal = () => {
  const { modal } = useContacts();

  return (
    <Container>
      <div className="modal">
        {modal === "user" ? <ModalUser /> : <ModalContact />}
      </div>
    </Container>
  );
};

export default Modal;
