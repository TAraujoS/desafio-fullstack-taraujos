import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  user: IUser | null;
  registerUser: (data: IUserRegister) => void;
  submitLogin: (data: IUserLogin) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  async function registerUser(data: IUserRegister): Promise<void> {
    const register = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };
    await api
      .post("/users", register)
      .then((response) => {
        console.log(response);
        toast.success("Cadastro realizado com sucesso!");
        navigate(`/login`);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
        console.log(err);
      });
  }

  async function submitLogin(data: IUserLogin): Promise<void> {
    try {
      const response = await api.post("/login", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(userResponse);

      localStorage.setItem("@fullstack:token", token);

      navigate("/dashboard", { replace: true });
      toast.success("Login efetuado com sucesso!", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Email ou senha inválidos", {
        autoClose: 2000,
      });
      console.log(error);
    }
  }

  const logout = (): void => {
    setUser(null);
    localStorage.clear();
    navigate("/");
    toast.success("Logout efetuado com sucesso!");
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, submitLogin, logout }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
