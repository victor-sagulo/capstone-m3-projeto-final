import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container, More } from "./style";
import g4HUB from "../../images/g4HUB.svg";
import star from "../../images/star.png";
import starFill from "../../images/starFill.png";
import metacritic from "../../images/metacritic.svg";
import metacriticWord from "../../images/metacriticWord.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import key from "../../Services/key";
import ReactHtmlParser from "react-html-parser";
import LikeButton from "../LikeButton";

const FullCardGame = ({ grade }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { slug } = useParams();

  const [gameInfo, setGameInfo] = useState([]);
  const [plataforms, setPlataforms] = useState([]);
  const [description, setDescription] = useState("");
  const [release, setRelease] = useState("");
  const [genres, setGenres] = useState([]);
  const [star1, setStar1] = useState(star);
  const [star2, setStar2] = useState(star);
  const [star3, setStar3] = useState(star);
  const [star4, setStar4] = useState(star);
  const [star5, setStar5] = useState(star);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${slug}?key=${key}`)
      .then((response) => {
        setGameInfo(response.data);
        setPlataforms(response.data.parent_platforms);
        setDescription(response.data.description);
        setGenres(response.data.genres);
        setRelease(
          new Date(response.data.released).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })
        );
      })
      .catch((error) => {
        toast.error("Ops! Página não encontrada", { theme: "dark" });
      });
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleStar1 = () => {
    setStar1(star1 === star ? starFill : star);
  };
  const handleStar2 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
  };
  const handleStar3 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
    setStar3(star3 === star ? starFill : star);
  };
  const handleStar4 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
    setStar3(star3 === star ? starFill : star);
    setStar4(star4 === star ? starFill : star);
  };
  const handleStar5 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
    setStar3(star3 === star ? starFill : star);
    setStar4(star4 === star ? starFill : star);
    setStar5(star5 === star ? starFill : star);
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
              <LikeButton className="like--button" gameInfo={gameInfo} />
              <div className="single--info">
                <h4>Plataformas:</h4>
                <div className="infos--details">
                  {plataforms.map((platforms, index) =>
                    index > 0 ? (
                      <span key={index}>,{platforms.platform.name}</span>
                    ) : (
                      <span key={index}>{platforms.platform.name}</span>
                    )
                  )}
                </div>
              </div>
              <div className="single--info">
                <h4>Gêneros:</h4>
                <div className="infos--details">
                  {genres.map((genre, index) =>
                    index > 0 ? (
                      <span key={index}>,{genre.name}</span>
                    ) : (
                      <span key={index}>{genre.name}</span>
                    )
                  )}
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
                {isClicked ? (
                  <IoIosArrowUp size="30px" />
                ) : (
                  <IoIosArrowDown size="30px" />
                )}
              </div>
            </div>
          </Container>
          <>
            {isClicked && (
              <More>
                <div className="grades container--more">
                  <div className="single--grade">
                    <img
                      src={g4HUB}
                      alt="GamesHub logo"
                      className="games--hub"
                    />
                    <div className="grade--box">
                      <span>{grade}</span>
                    </div>
                  </div>
                  <div className="single--grade">
                    <div className="images--container">
                      <img
                        src={metacritic}
                        alt="metacritic"
                        className="metacritic"
                      />
                      <img
                        src={metacriticWord}
                        alt="metacritic logo word"
                        className="metacritic"
                      />
                    </div>
                    <div className="grade--box">
                      <span>
                        {gameInfo.metacritic ? gameInfo.metacritic : "?"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user--grade container--more">
                  <h3>
                    Deixe sua <span>nota</span> também
                  </h3>
                  <div className="stars--container">
                    <div
                      className="single--star star1"
                      style={{ backgroundImage: `url(${star1})` }}
                      onMouseOver={handleStar1}
                      onMouseOut={handleStar1}
                    ></div>
                    <div
                      className="single--star star2"
                      style={{ backgroundImage: `url(${star2})` }}
                      onMouseOver={handleStar2}
                      onMouseOut={handleStar2}
                    ></div>
                    <div
                      className="single--star star3"
                      style={{ backgroundImage: `url(${star3})` }}
                      onMouseOver={handleStar3}
                      onMouseOut={handleStar3}
                    ></div>
                    <div
                      className="single--star star4"
                      style={{ backgroundImage: `url(${star4})` }}
                      onMouseOver={handleStar4}
                      onMouseOut={handleStar4}
                    ></div>
                    <div
                      className="single--star star5"
                      style={{ backgroundImage: `url(${star5})` }}
                      onMouseOver={handleStar5}
                      onMouseOut={handleStar5}
                    ></div>
                  </div>
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
