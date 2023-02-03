import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext, IUserLogin, useAuth } from "../../context/AuthContext";
import { loginSchema } from "../../schemas";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });
  const { submitLogin } = useAuth();

  const onError = () => toast.error("Campo obrigatório!", { autoClose: 2000 });

  const onSubmit = handleSubmit(submitLogin, onError);

  return (
    <section>
      <div className="global-login-div">
        <div className="modalLogin">
          <h3>Login</h3>

          <form onSubmit={onSubmit}>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                {...register("email")}
              />
            </label>
            <span>{errors?.email?.message}</span>

            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("password")}
              />
            </label>
            <span>{errors?.password?.message}</span>

            <button type="submit" className="btnLogin">
              Entrar
            </button>
            <p>
              Ainda não tem cadastro?
              <Link to={"/"}>Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
