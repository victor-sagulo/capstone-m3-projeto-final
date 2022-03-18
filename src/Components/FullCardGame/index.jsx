import { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Mobile, More, MoreHide } from "./style";
import gamesHubLogo from "../../images/gamesHubLogo.svg";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import key from "../../Services/key"

const FullCardGame = ({ grade }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { slug } = useParams();
  const [gameInfo, setGameInfo] = useState([]);
  const [plataforms,setPlataforms] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${slug}?key=${key}`
      )
      .then((response) => {
        setGameInfo(response.data);
        setPlataforms(response.data.parent_platforms);
        setDescription(response.data.description)
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
          <Mobile>
            <div className="img-holder">
              <img
                className="game-image"
                src={gameInfo.background_image}
                alt={gameInfo.name}
              />
            </div>
            <div className="info-holder">
              <div>
                <span>{gameInfo.name}</span>
              </div>
              <div className="game-plataform">
                <h4>
                  Plataformas:
                  {plataforms.map((platforms,index) => (
                    <span key={index}> {platforms.platform.name}</span>
                  ))}
                </h4>
              </div>
              <div className="game-description">
                <div>{description.replace(/[<p>\\/&/;]/g, "")}</div>
                <div className="arrow-buttom" onClick={handleClick}>
                  {isClicked ? <AiOutlineDown /> : <AiOutlineUp />}
                </div>
              </div>
            </div>
            <>
              {isClicked ? (
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
              ) : (
                <MoreHide></MoreHide>
              )}
            </>
          </Mobile>
        </>
      )}
    </>
  );
};

export default FullCardGame;
