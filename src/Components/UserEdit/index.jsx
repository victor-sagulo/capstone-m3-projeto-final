import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Buttons from "../Buttons";
import { Body, FormDivContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const UserEdit = ({ handleModal }) => {
  const { user, handleEditUser } = useContext(UserContext);

  const schema = yup.object().shape({
    username: yup.string().max(18),
    plataform: yup.string(),
    img: yup.string(),
    description: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    if (data.username === "") {
      delete data.username;
    }
    if (data.plataform === "") {
      delete data.plataform;
    }
    if (data.img === "") {
      delete data.img;
    }
    if (data.description === "") {
      delete data.description;
    }
    console.log(data);
    handleEditUser(data);
  };

  return (
    <FormDivContainer>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input
          name="username"
          register={register}
          label="Username"
          placeholder="Altere seu nome de usuário"
          error={errors.username?.message}
          type="text"
        />
        <Input
          name="plataform"
          register={register}
          label="Plataforma favorita"
          placeholder="Altere sua plataforma favorita"
          error={errors.plataform?.message}
          type="text"
        />
        <Input
          name="img"
          register={register}
          label="Foto de perfil"
          placeholder="Altere a URL da sua imagem de perfil"
          error={errors.img?.message}
          type="text"
        />
        <Input
          name="description"
          register={register}
          label="Descrição"
          placeholder="Altere a sua descrição"
          error={errors.description?.message}
          type="text"
        />
        <Input
          name="password"
          register={register}
          label="Para fazer a alteração coloque sua senha"
          placeholder="Senha"
          error={errors.password?.message}
        />
        <div>
          <Buttons type="submit">Alterar</Buttons>
          <Buttons onClick={handleModal}>Cancelar</Buttons>
        </div>
      </form>
    </FormDivContainer>
  );
};

export default UserEdit;
