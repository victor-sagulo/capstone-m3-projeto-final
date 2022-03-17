import { GamesContext } from "../../Providers/Games";
import { useContext } from "react";
import Header from "../../Components/Header";
import Modals from "../../Components/Modal";
import FullCardGame from "../../Components/FullCardGame";

const Game = () => {
  const { gameInfo } = useContext(GamesContext);

  return (
    <main>
      <div className="home-top">
        <Header />
        <Modals />
      </div>
      <FullCardGame />
    </main>
  );
};

export default Game;
