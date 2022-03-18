import { GamesContext } from "../../Providers/Games";
import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header";
import Modals from "../../Components/Modal";
import FullCardGame from "../../Components/FullCardGame";


const Game = () => {

  return (
    <main>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame  grade={5} />
    </main>
  );
};

export default Game;
