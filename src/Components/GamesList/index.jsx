import { useContext } from "react";
import { GamesContext } from "../../Providers/Games";
import CardGame from "../GameCard";

const GamesList = ({ type }) => {
  const { gamesList, listAllGames, previousPage, nextPage } =
    useContext(GamesContext);

  return (
    <div>
      <ul>
        {type === "home" &&
          gamesList.map((game, index) => <CardGame game={game} key={index} />)}

        {type === "games" &&
          listAllGames.map((game, index) => (
            <CardGame game={game} key={index} />
          ))}
      </ul>
      <div>
        <button onClick={previousPage}>previous</button>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default GamesList;
