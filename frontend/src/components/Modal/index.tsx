import { useContext } from "react";
import { useContacts } from "../../context/ContactContext";
import ModalContact from "../ModalContact";
import ModalUser from "../ModalUser";

// import Container from "./styles";

const Modal = () => {
  const { modal } = useContacts();

  return (
    <div>
      <div className="modal">
        {modal === "user" ? <ModalUser /> : <ModalContact />}
      </div>
    </div>
  );
};

export default Modal;
