import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Buttons from "../Buttons";
import { Body, FormDivContainer } from "./style";

const UserEdit = ({ handleModal }) => {
  const schema = yup.object().shape({
    username: yup.string(),
    description: yup.string(),
    img: yup.string(),
    plataform: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    return console.log(data);
  };

  return (
    <FormDivContainer>
      <form onSubmit={handleSubmit()}>
        <Input
          name="username"
          register={register}
          label="Username"
          placeholder="Altere seu nome de usuário"
          error={errors.username?.message}
          type="text"
        />
        <Input
          name="description"
          register={register}
          label="Descrição do perfil"
          placeholder="Altere a sua descrição"
          error={errors.description?.message}
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
          name="plataform"
          register={register}
          label="Plataforma favorita"
          placeholder="Altere sua plataforma favorita"
          error={errors.plataform?.message}
          type="text"
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
