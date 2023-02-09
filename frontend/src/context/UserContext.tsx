import {
  useContext,
  createContext,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAuthProviderProps, useAuth } from "./AuthContext";

interface IUserContext {
  updateUser: (data: IEditUser) => void;
  deleteUser: () => void;
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
}

export interface IEditUser {
  name?: string;
  email?: string;
  phone?: string;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProviderProps) => {
  const [modal, setModal] = useState<string | null>(null);
  const { user, setUser } = useAuth();
  const token = localStorage.getItem("@fullstack:token");

  const navigate = useNavigate();

  async function loadUser(token: string) {
    try {
      const response = await api.get(`/users/account`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      loadUser(token);
    } else {
      navigate("/login");
    }
  }, [token]);

  const updateUser = (data: IEditUser) => {
    api
      .patch("/users/account", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(null);
        loadUser(token!);

        toast.success("Perfil atualizado com sucesso!");
      })
      .catch((error) => {
        toast.error("Ocorreu um erro ao editar seu perfil.", {
          autoClose: 2000,
        });
        console.log(error);
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
      .then((res) => {
        setModal(null);
        toast.success("Conta deletada com sucesso!");

        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.response?.data);

        toast.error("Ops! Algo deu errado!");
      });
  };

  return (
    <UserContext.Provider value={{ updateUser, deleteUser, modal, setModal }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;
