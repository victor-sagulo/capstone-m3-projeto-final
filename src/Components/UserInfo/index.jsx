import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import UserEdit from "../UserEdit";
import Buttons from "../Buttons";
import { DivInfosContainer, InfosBox, InfosContainer } from "./style";
import { set } from "react-hook-form";
import app from "../../Services/api";
import userImg from "../../images/userImg.svg";

const UserInfo = ({ id }) => {
  const [modal, setModal] = useState(true);
  const [username, setUsername] = useState("");
  const [img, setImg] = useState(userImg);
  const [description, setDescription] = useState("");
  const [plataform, setPlataform] = useState("");
  const [userId, setUserId] = useState("");
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {
        setUsername(response.data.user.username);
        setImg(response.data.user.img);
        setDescription(response.data.user.description);
        setPlataform(response.data.user.plataform);
        setUserId(response.data.user._id);
      })
      .catch((err) => console.log(err));
  }, [user]);

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
              <img
                src={img}
                alt="Imagem de perfil do usuário"
                className="user--profile--img"
              />
            </figure>
            <div>
              <h2>{username}</h2>
              <h3>
                Plataforma favorita: <span>{plataform}</span>
              </h3>
            </div>
          </InfosContainer>
          {user._id === userId && (
            <button onClick={handleModal}>
              <BsFillPencilFill />
            </button>
          )}
        </InfosBox>

        <div>
          <p>{description}</p>
        </div>
      </DivInfosContainer>
    </>
  );
};

export default UserInfo;
