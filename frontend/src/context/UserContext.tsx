import { useContext, createContext, useEffect } from "react";

import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAuthProviderProps, IUser, useAuth } from "./AuthContext";
import { useContacts } from "./ContactContext";

interface IUserContext {
  updateUser: (data: IEditUser) => void;
  deleteUser: () => void;
}

export interface IEditUser {
  name?: string;
  email?: string;
  phone?: string;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProviderProps) => {
  const { setModal } = useContacts();
  const { user, setUser } = useAuth();
  const token = localStorage.getItem("@fullstack:token");

  const navigate = useNavigate();

  const updateUser = (data: IEditUser) => {
    api
      .patch("/users/account", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        setModal(null);

        toast.success("Perfil atualizado com sucesso!");
      })
      .catch((error) => {
        console.log(error.response?.data);

        toast.error("Ops! Algo deu errado!");
      });
  };

  const deleteUser = () => {
    api
      .delete("/users/account", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setModal(null);

        toast.success("Conta deletada com sucesso!");

        setTimeout(() => {
          navigate("/", { replace: true });
          localStorage.clear();
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response?.data);

        toast.error("Ops! Algo deu errado!");
      });
  };

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/users/account");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;
