import { DivContainer, GamesListContainer } from "./style";
import { IoLogoGameControllerA } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { GamesContext } from "../../Providers/Games";
import CardGame from "../CardGame";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1701 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 745 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 744, min: 0 },
    items: 1,
  },
};

const LikedGames = () => {
  const { user } = useContext(UserContext);
  const { gamesList } = useContext(GamesContext);

  return (
    <DivContainer>
      <div>
        <IoLogoGameControllerA />
        <h1>Jogos curtidos</h1>
        {user.LikedGames ? (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            autoPlaySpeed={10000}
          >
            {user.LikedGames.map((game) => (
              <div>
                <CardGame game={game} />
              </div>
            ))}
          </Carousel>
        ) : (
          <h3>Nenhum jogo curtido :c</h3>
        )}
      </div>
    </DivContainer>
  );
};

export default LikedGames;
