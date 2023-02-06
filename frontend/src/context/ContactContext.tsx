import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { IUser, useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export interface IContactProviderProps {
  children: ReactNode;
}

export interface IContactContext {
  contacts: IContact[];
  setContacts: Dispatch<SetStateAction<IContact[]>>;
  contact: IContact;
  setContact: Dispatch<SetStateAction<IContact>>;
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  loadContacts: (user: IUser) => void;
  newContact: (data: INewContact) => void;
  deleteContact: (id: string) => void;
  editContact: (data: IEditContact) => void;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface INewContact {
  name: string;
  email: string;
  phone: string;
}

export interface IEditContact {
  name?: string;
  email?: string;
  phone?: string;
}

export interface IDeleteContact {
  id: string;
  contact: string;
}

export const ContactsContext = createContext<IContactContext>(
  {} as IContactContext
);

const ContactProvider = ({ children }: IContactProviderProps) => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [modal, setModal] = useState<string | null>(null);
  const token = localStorage.getItem("@fullstack:token");

  async function loadContacts(user: IUser) {
    try {
      const response = await api.get(`/contacts/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      loadContacts(user);
    }
  }, [user]);

  function newContact(data: INewContact) {
    api
      .post(`/contacts/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContacts((oldList) => [res.data, ...oldList]);
        toast.success("Contato criado com sucesso!");
      })
      .catch((error) => console.log(error));
  }

  function editContact(data: IEditContact) {
    api
      .patch(`/contacts/${contact?.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        loadContacts(user!);
        toast.success("Alteração salva com sucesso!");
        setModal(null);
      })
      .catch((error) => console.log(error));
  }

  function deleteContact(id: string) {
    api
      .delete(`/contacts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
        toast.success("Contato deletado com sucesso!");
        setModal(null);
      })
      .catch((error) => console.log(error));
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        contact,
        setContact,
        modal,
        setModal,
        loadContacts,
        newContact,
        deleteContact,
        editContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  return useContext(ContactsContext);
};

export default ContactProvider;
