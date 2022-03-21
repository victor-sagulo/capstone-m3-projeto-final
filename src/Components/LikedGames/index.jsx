import { DivContainer, GamesListContainer } from "./style";
import { IoLogoGameControllerA } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { GamesContext } from "../../Providers/Games";
import CardGame from "../CardGame";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1701 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1150 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 745 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 744, min: 0 },
    items: 1,
  },
};

const LikedGames = () => {
  const { userPosts, user } = useContext(UserContext);
  const { gamesList } = useContext(GamesContext);

  return (
    <DivContainer>
      <div>
        <IoLogoGameControllerA />
        <h1>Jogos curtidos</h1>
        {user.likedGames.length > 0 ? (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            autoPlaySpeed={100000}
            itemClass="carouselItem"
            partialVisible={true}
            swipeable={true}
            draggable={true}
          >
            {user.likedGames.map((game) => (
              <div key={game.slug}>
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
