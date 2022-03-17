import { LiCardGame } from "./style";
import {useContext} from "react"
import { GamesContext } from "../../Providers/Games";

const CardGame = ({ game }) => {
  const { background_image, name, genres, released, parent_platforms } = game;

  const {getGameInfo} = useContext(GamesContext)

  const plataformsText = parent_platforms.reduce(
    (acc, plat, index) => (index === 0 ? acc + plat.platform.name : acc + ", " + plat.platform.name),
    ""
  );

  const genresText = genres.reduce(
    (acc, gen, index) => (index === 0 ? acc + gen.name : acc + ", " + gen.name),
    ""
  );

  const formatedDate = new Date(released).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  const nameLength = name.length;

  const nameStyle = nameLength > 28 ? "min" : "regular";

  return (
    <LiCardGame nameStyle={nameStyle}>
      <img src={background_image} alt="Game card" />
      <h2>{name}</h2>
      <p>
        Gêneros: <span>{genresText}</span>
      </p>
      <p>
        Plataformas: <span>{plataformsText}</span>
      </p>
      <p>
        Lançamento: <span>{formatedDate}</span>
      </p>
      <button className="view--more" onClick={()=>getGameInfo(game)}>Ver Mais</button>
    </LiCardGame>
  );
};

export default CardGame;
