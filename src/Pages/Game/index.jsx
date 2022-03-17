import { GamesContext } from "../../Providers/Games";
import { useContext } from "react";
import Header from "../../Components/Header";
import Modals from "../../Components/Modal";
import FullCardGame from "../../Components/FullCardGame";

const Game = () => {
  const { gameInfo } = useContext(GamesContext);
  console.log(gameInfo);

  return (
    <main>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame game={gameInfo} grade={5} />
    </main>
  );
};

export default Game;
