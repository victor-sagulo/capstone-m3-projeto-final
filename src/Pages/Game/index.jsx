import Header from "../../Components/Header";
import FullCardGame from "../../Components/FullCardGame";
import {useContext, useState} from "react"
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


const Game = () => {
  const [gameInfo,setGameInfo] = useState([])
  const { slug } = useParams();
  const {user, postsList, handlePost} = useContext(UserContext)
  const filteredComments = postsList.filter((post)=>post.game === slug)
  
  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${slug}?key=${key}`)
      .then((response) => {
        setGameInfo(response.data);
      })
      .catch((error) => {
        toast.error("Ops! Página não encontrada", { theme: "dark" });
      });
  }, []);

  const schema = yup.object().shape({
    text: yup.string().required("Seu comentário está vazio"),
  });

  console.log (gameInfo)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleComment = (data) => {
    const text = data.text
    const name = gameInfo.name
    handlePost(text, name, slug)
  }

  return (
    <FancyMain>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame grade={5} />
      <div>
        <figure>
          <img src={user.img}/>
        </figure>
        <form className="form" onSubmit={handleSubmit(handleComment)}>
          <div>
          <h3>{user.username}</h3>
          <Buttons type="input">Enviar Comentário</Buttons>
          </div>
          <textarea placeholder="Digite aqui seu comentário" {...register("text")}/>
        </form>
      </div>
      <CommentsList comments={filteredComments} profile/>
    </FancyMain>
  );
};

export default Game;
