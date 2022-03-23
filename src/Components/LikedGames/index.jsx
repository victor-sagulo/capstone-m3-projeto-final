import { DivContainer } from "./style";
import { IoLogoGameControllerA } from "react-icons/io";
import app from "../../Services/api"
import CardGame from "../CardGame";
import {useParams} from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { useEffect, useState } from "react";

const responsive = {
  superLargeDesktop: {
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

  const {id} = useParams();
  const [gamesLiked,setGamesLiked] = useState([]);
  
  useEffect(() =>{
    app.get(`/likes/user/${id}`).then((response) => {
      setGamesLiked(response.data.likedGames);
    });
  },[id])
  

  return (
    <DivContainer>
      <div>
        <IoLogoGameControllerA />
        <h1>Jogos curtidos</h1>
        {gamesLiked.length > 0 ? (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            autoPlaySpeed={100000}
            itemClass="carouselItem"
            partialVisible={true}
            swipeable={true}
            draggable={true}
          >
            {gamesLiked.map((game) => (
              <div key={game._id}>
                <CardGame game={game.gameLiked} />
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
