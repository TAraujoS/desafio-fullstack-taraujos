import { IContact, useContacts } from "../../context/ContactContext";

const ListContact = () => {
  const { setModal, contacts, setContact } = useContacts();
  console.log(contacts);

  const handleClick = (contact: IContact) => {
    setModal("edit");
    setContact(contact);
  };

  return (
    <section>
      <h3>Seus contatos</h3>
      {contacts?.length === 0 ? (
        <ul>
          <li>Sem contatos até o momento. Vamos cadastrar?</li>
        </ul>
      ) : (
        <ul>
          {contacts?.map((contact: IContact) => (
            <li key={contact.id} onClick={() => handleClick(contact)}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ListContact;
