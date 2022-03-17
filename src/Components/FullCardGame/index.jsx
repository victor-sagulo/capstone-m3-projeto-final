import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Mobile, More, MoreHide } from "./style";
import gamesHubLogo from "../../images/gamesHubLogo.svg";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const FullCardGame = ({ game, grade }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  const [plataformArray, setPlataformArray] = useState(
    game.plataforms.map((plataform) => {
      return plataform.platform.name;
    })
  );
  const [plataformsString, setPlataformString] = useState(
    plataformArray.join(", ")
  );

  setPlataformString.map();

  return (
    <Mobile>
      <div className="img-holder">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div>
        <span>{game.name}</span>
        <div>Plataform: {plataformsString}</div>
      </div>
      <div>{game.description}</div>
      <div onClick={handleClick}>
        {isClicked ? <AiOutlineDown /> : <AiOutlineUp />}
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
                <span>{game.metacritic}</span>
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
  );
};

export default FullCardGame;
