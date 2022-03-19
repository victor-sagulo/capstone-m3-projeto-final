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
  const { user, userPosts } = useContext(UserContext);
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
              <img src={userPosts.img} alt="Imagem de perfil do usuário" className="user--profile--img"/>
            </figure>
            <div>
              <h2>{userPosts.username}</h2>
              <h3>
                Plataforma favorita: <span>{userPosts.plataform}</span>
              </h3>
            </div>
          </InfosContainer>
         {user.id===userPosts.id ? 
         <button onClick={handleModal}>
            <BsFillPencilFill />
          </button>: <div></div>}
        </InfosBox>

        <div>
          <p>{userPosts.description}</p>
        </div>
      </DivInfosContainer>
    </>
  );
};

export default UserInfo;
