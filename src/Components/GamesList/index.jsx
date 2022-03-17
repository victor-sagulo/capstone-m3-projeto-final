import { useContext } from "react";
import { GamesContext } from "../../Providers/Games";
import CardGame from "../CardGame";
import { GamesListUl } from "./style";

const GamesList = ({ type }) => {
  const { gamesList, listAllGames, previousPage, nextPage } =
    useContext(GamesContext);

  return (
    <div>
      <GamesListUl>
        {type === "home" &&
          gamesList.map((game, index) => (
            <li>
              <CardGame game={game} key={index} />
            </li>
          ))}

        {type === "games" &&
          listAllGames.map((game, index) => (
            <li>
              <CardGame game={game} key={index} />
            </li>
          ))}
      </GamesListUl>
      <div>
        <button onClick={previousPage}>previous</button>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default GamesList;
