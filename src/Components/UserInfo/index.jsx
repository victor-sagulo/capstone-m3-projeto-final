import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import UserEdit from "../UserEdit";
import Buttons from "../Buttons";
import { DivInfosContainer, InfosBox, InfosContainer } from "./style";

const UserInfo = () => {
  const [modal, setModal] = useState(true);
  const { user } = useContext(UserContext);
  const history = useHistory();

  if (!user) {
    history.push("/login");
  }

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {!modal && <UserEdit handleModal={handleModal} />}

      <DivInfosContainer>
        <InfosBox>
          <InfosContainer>
            <figure>
              <img src={user.img} alt="Imagem de perfil do usuário" />
            </figure>
            <div>
              <h2>{user.username}</h2>
              <h3>
                Plataforma favorita: <span>{user.plataform}</span>
              </h3>
            </div>
          </InfosContainer>
          <button onClick={handleModal}>
            <BsFillPencilFill />
          </button>
        </InfosBox>

        <div>
          <p>{user.description}</p>
        </div>
      </DivInfosContainer>
    </>
  );
};

export default UserInfo;
