import { useContext } from "react";
import { GamesContext } from "../../Providers/Games";

const GamesList = ({ type }) => {
  const { gamesList, listAllGames, previousPage, nextPage } =
    useContext(GamesContext);

  return (
    <div>
      <ul>
        {type === "home" &&
          gamesList.map((game) => (
            <li>
              <img src={game.background_image} style={{ maxWidth: "300px" }} />
            </li>
          ))}

        {type === "games" &&
          listAllGames.map((game) => (
            <li>
              <img src={game.background_image} style={{ maxWidth: "300px" }} />
            </li>
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
