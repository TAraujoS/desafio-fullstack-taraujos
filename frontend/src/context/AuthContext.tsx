import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import api from "../services/api";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  registerUser: (data: IUserRegister) => void;
  submitLogin: (data: IUserLogin) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const tokenUser = localStorage.getItem("@fullstack:token");

  const navigate = useNavigate();

  const registerUser = (data: IUserRegister) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        toast.success("Cadastro realizado com sucesso!");
        navigate(`/login`);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
        console.log(err);
      });
  };

  const submitLogin = (data: IUserLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("@fullstack:token", response.data.token);
        toast.success("Login feito com sucesso!", { autoClose: 2000 });
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        toast.error("Email ou senha inválidos", {
          autoClose: 2000,
        });
        console.log(error);
      });
  };

  useEffect(() => {
    if (tokenUser) {
      api.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
      api
        .get(`/users/account`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, [tokenUser]);

  const logout = (): void => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout efetuado com sucesso!");
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, submitLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;