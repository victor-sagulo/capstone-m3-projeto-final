import * as yup from "yup"
import { Link } from "react-router-dom"
import Input from "../Input"
import Buttons from "../Buttons"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () =>{
    const {user, handleLogin} = useContext(UserContext)

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
        password: yup.string().required("Senha obrigatória"),
      })

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

      if (user) {
        return <Redirect to="/"/>;
      }

      const submitLogin =(data)=>{
        handleLogin(data.email,data.password)
        if(user) {return console.log("foi")}
        else{return console.log("Erro")}
        
      }

    return(
        <div>
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit(submitLogin)}>
                <Input
                     name="email"
                     register={register}
                     label="Email"
                     placeholder="Insira o seu email"
                     error={errors.email?.message}/>
                <Input
                    name="password"
                    register={register}
                    label="Senha"
                    placeholder="Insira a sua senha"
                    type="password"
                    error={errors.password?.message}
                />
                <Buttons type="submit">Realizar Login</Buttons>
             </form>
             <span>Ainda não possui uma conta?
             <Link to="/signup">Cadastre-se</Link>
             </span>
        </div>
    )
}
export default LoginForm