import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container, More } from "./style";
import gamesHubLogo from "../../images/gamesHubLogo.svg";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import key from "../../Services/key";
import ReactHtmlParser from 'react-html-parser'; 


const FullCardGame = ({ grade }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { slug } = useParams();
  const [gameInfo, setGameInfo] = useState([]);
  const [plataforms, setPlataforms] = useState([]);
  const [description, setDescription] = useState("");
  const [release,setRelease] = useState("");
  const [genres,setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${slug}?key=${key}`)
      .then((response) => {
        setGameInfo(response.data);
        setPlataforms(response.data.parent_platforms);
        setDescription(response.data.description);
        setGenres(response.data.genres)
        setRelease(new Date(response.data.released).toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        }))
      })
      .catch((error) => {
        toast.error("Ops! Página não encontrada", { theme: "dark" });
      });
  }, [gameInfo]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {gameInfo && (
        <>
          <Container>
            <div className="img-holder">
              <img
                className="game-image"
                src={gameInfo.background_image}
                alt={gameInfo.name}
              />
            </div>
            <div className="info-holder">
              <h3 className="game--name">{gameInfo.name}</h3>
              <div className="single--info">
                <h4>
                  Plataformas:
                </h4>
                <div className="infos--details">
                  {plataforms.map((platforms, index) => (
                      index > 0? <span key={index}>,{platforms.platform.name}</span> : <span key={index}>{platforms.platform.name}</span>
                    ))}
                </div>
              </div>
              <div className="single--info">
                <h4>Gêneros:</h4>
                <div className="infos--details">
                    {genres.map((genre, index) => (
                        index > 0? <span key={index}>,{genre.name}</span> : <span key={index}>{genre.name}</span>
                      ))}
                </div>
              </div>
              <div className="single--info">
                <h4>Lançamento:</h4>
                <div className="infos--details">
                    <span>{release}</span>
                </div>
              </div>
              <div className="game-description">
                {ReactHtmlParser(description)}
              </div>
              <div className="arrow-buttom" onClick={handleClick}>
                {isClicked ? <IoIosArrowUp size="30px"/> : <IoIosArrowDown size="30px"/>}
              </div>
            </div>
          </Container>
          <>
            {isClicked && (
              <More>
                <div>
                  <div>
                    <img src={gamesHubLogo} alt="GamesHub logo" />
                    <span>{grade}</span>
                  </div>
                  <div>
                    <img
                      src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
                      alt="metacritic"
                    ></img>
                    <span>{gameInfo.metacritic}</span>
                  </div>
                </div>
                <div>
                  <span>Deixe sua nota também</span>
                  <div></div>
                </div>
              </More>
            )}
          </>
        </>
      )}
    </>
  );
};

export default FullCardGame;
