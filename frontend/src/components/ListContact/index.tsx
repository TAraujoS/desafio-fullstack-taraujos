import { IContact, useContacts } from "../../context/ContactContext";
import { useUser } from "../../context/UserContext";
import { Container } from "./styles";

const ListContact = () => {
  const { contacts, setContact } = useContacts();
  const { setModal } = useUser();

  const handleClick = (contact: IContact) => {
    setModal("edit");
    setContact(contact);
  };

  return (
    <Container>
      <h3>Seus contatos</h3>
      <p>Para editar, basta clicar no contato</p>
      <ul className="contactTitle">
        <li>Nome</li>
        <li>Email</li>
        <li>Telefone</li>
      </ul>
      {contacts?.length === 0 ? (
        <ul>
          <li className="noContact">
            Sem contatos até o momento. Vamos cadastrar?
          </li>
        </ul>
      ) : (
        <ul className="contactData">
          {contacts?.map((contact: IContact) => (
            <li key={contact.id} onClick={() => handleClick(contact)}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ListContact;
