import Header from "../../Components/Header";
import FullCardGame from "../../Components/FullCardGame";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/user";
import CommentsList from "../../Components/CommentsList";
import { FancyMain } from "./style";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Buttons from "../../Components/Buttons";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import key from "../../Services/key";
import app from "../../Services/api";

const Game = () => {
  const [gameInfo, setGameInfo] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const { user, handlePost } = useContext(UserContext);
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${slug}?key=${key}`)
      .then((response) => {
        setGameInfo(response.data);
      })
      .catch((error) => {
        toast.error("Ops! Página não encontrada", { theme: "dark" });
      });
    app
      .get(`/comments/game/${slug}`)
      .then((response) => {
        setFilteredComments(response.data);
      })
      .catch((err) => toast.error("jogo não encontrado", { theme: "dark" }));
  }, []);

  const schema = yup.object().shape({
    text: yup.string().required("Seu comentário está vazio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleComment = (data) => {
    const text = data.text;
    const name = gameInfo.name;
    handlePost(text, name, slug, filteredComments, setFilteredComments);
  };

  return (
    <FancyMain>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame grade={5} />
      <div>
        <form className="form--comment" onSubmit={handleSubmit(handleComment)}>
          <div className="basic--infos">
            <figure>
              <img
                className="img-user"
                src={user.img}
                alt="Imagem escolhida pelo usuário"
              />
            </figure>
            <h3>{user.username}</h3>
          </div>
          <div className="send--control">
            <textarea
              id="textAreaValue"
              placeholder="Digite aqui seu comentário"
              {...register("text")}
            />
            <Buttons type="submit" className="button--send">
              Enviar
            </Buttons>
          </div>
        </form>
      </div>
      <CommentsList comments={filteredComments} />
    </FancyMain>
  );
};

export default Game;
