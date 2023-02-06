import { IContact, useContacts } from "../../context/ContactContext";
import { Container } from "./styles";

const ListContact = () => {
  const { setModal, contacts, setContact } = useContacts();
  console.log(contacts);

  const handleClick = (contact: IContact) => {
    setModal("edit");
    setContact(contact);
  };

  return (
    <Container>
      <h3>Seus contatos</h3>
      <ul className="contactTitle">
        <li>Nome</li>
        <li>Email</li>
        <li>Telefone</li>
      </ul>
      {contacts?.length === 0 ? (
        <ul>
          <li>Sem contatos até o momento. Vamos cadastrar?</li>
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
