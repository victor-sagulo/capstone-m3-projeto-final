import { LiCardGame } from "./style";

const CardGame = ({ game }) => {
  return (
    <LiCardGame>
      <img src={game.background_image} alt="Game card" />
      <h2>{game.name}</h2>
    </LiCardGame>
  );
};

export default CardGame;
